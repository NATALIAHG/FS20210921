package com.example.domains.entities.dtos;

import java.lang.invoke.VarHandle.AccessMode;
import java.math.BigDecimal;
import java.security.PublicKey;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import org.hibernate.transform.ToListResultTransformer;
import org.springframework.beans.factory.parsing.SourceExtractor;

import com.example.domains.entities.Actor;
import com.example.domains.entities.Category;
import com.example.domains.entities.Film;
import com.example.domains.entities.FilmActor;
import com.example.domains.entities.FilmCategory;
import com.example.domains.entities.Language;
import com.fasterxml.jackson.annotation.JsonProperty;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@ApiModel(value = "Editor de Peliculas", description = "Version para editar peliculas")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class FilmDTOpostPut {
	@ApiModelProperty(value="Indentificador de pelicula", required = true ) //accessMode = AccessMode.READ_ONLY
	@JsonProperty("id")
	private int FilmId;
	@ApiModelProperty(value = "Titulo de la pelicula" )
	@JsonProperty("titulo")
	private String title;
	@ApiModelProperty(value = "Descripcion de la pelicula" )
	@JsonProperty("descripcion")
	private String description;
//	 @JsonProperty("idioma")
//	private int languageid;
	@ApiModelProperty(value = "Length" )
	@JsonProperty("length")
	private int length;
	@ApiModelProperty(value = "clasificación" )
	@JsonProperty("clasificación")
	private String rating;
	@ApiModelProperty(value = "año_lanzamiento" )
	@JsonProperty("año_lanzamiento")
	private Short releaseYear;
	@ApiModelProperty(value = "duracion" )
	@JsonProperty("duracion")
	private byte rentalDuration;
	@ApiModelProperty(value = "tasa_rendimiento" )
	@JsonProperty("tasa_rendimiento")
	private BigDecimal rentalRate;
	@ApiModelProperty(value = "replacementCost" )
	@JsonProperty("replacementCost")
	private BigDecimal replacementCost;
	@ApiModelProperty(value = "language" )
	@JsonProperty("language")
	private Integer language;
	@ApiModelProperty(value = "languageVO" )
	@JsonProperty("languageVO")
	private Integer languageVO;
	@JsonProperty("filmActors")
	private List<Integer> filmActors = new ArrayList<Integer>();
	@JsonProperty("filmCategories")
	private List<Integer> filmCategories = new ArrayList<Integer>();

	public static Film from(FilmDTOpostPut source) {
		Film peliFilm = new Film(source.getFilmId(), source.getTitle(),
				// new Language(source.getLanguageid()),
				source.getDescription(), source.getLength(), source.getRating(), source.getReleaseYear(),
				source.getRentalDuration(), source.getRentalRate(), source.getReplacementCost(),
				source.getLanguage() == null ? null : new Language(source.getLanguage()),
				source.getLanguageVO() == null ? null : new Language(source.getLanguageVO()));
				
		// LAS COLLECIONES LAS DEJAMOS FUERA PARA TRATARLAS LUEGO
		// recorremos la coleccion añadiendo el idactor
		// source.filmActors.forEach(idactor->peliFilm.addFilmActor(new
		// Actor(idactor)));

		return peliFilm;
	}

	public static FilmDTOpostPut from(Film source) {
		return new FilmDTOpostPut(source.getFilmId(), source.getTitle(), source.getDescription(), source.getLength(),
				source.getRating(), source.getReleaseYear(), source.getRentalDuration(), source.getRentalRate(),
				source.getReplacementCost(), source.getLanguage().getLanguageId(), // COJO EL LENGUAJE DE LA ENTIDAD																				// FILM, PARA LUEGO TRANSFERIR
				source.getLanguageVO().getLanguageId(),
				// stream convierte un array en un flujo para consultas, map coge elemento
				// entrada y devuelve valor de salida
				// collect para materializarlo en una tabla collect(collect.toList()),
				source.getFilmActors().stream().map(item -> item.getActor().getActorId()).collect(Collectors.toList()),
				source.getFilmCategories().stream().map(item -> item.getCategory().getCategoryId())
						.collect(Collectors.toList()));
	}

	public Film update(Film target) {
		target.setFilmId(FilmId);
		target.setTitle(title);
		target.setDescription(description);
		target.setLength(length);
		target.setRating(rating);
		target.setReleaseYear(releaseYear);
		target.setRentalDuration(rentalDuration);
		target.setRentalRate(rentalRate);
		target.setReplacementCost(replacementCost);
		if (language == null) { // si el lenguage esta vacio, o lo coge y es vacio, o no esta vacio y es
								// diferente, establece el nuevo dato
			target.setLanguage(null);
		} else if (target.getLanguage() == null
				|| (target.getLanguage() != null && target.getLanguage().getLanguageId() != language)) {
			target.setLanguage(new Language(language));
		}

		if (languageVO == null) {
			target.setLanguageVO(null);
		} else if (target.getLanguageVO() == null
				|| (target.getLanguageVO() != null && target.getLanguageVO().getLanguageId() != languageVO)) {
			target.setLanguageVO(new Language(languageVO));
		}
		// Borra los actores que sobran
		List<FilmActor> delAct = target.getFilmActors().stream()
				.filter(item -> !filmActors.contains(item.getActor().getActorId())).collect(Collectors.toList());
		delAct.forEach(item -> target.removeFilmActor(item));

		// Añade los actores que faltan
		filmActors.stream()
				.filter(item -> !target.getFilmActors().stream().anyMatch(o -> o.getActor().getActorId() == item))
				.forEach(item -> target.addFilmActor(new Actor(item)));
		// Borra las categorias que sobran
		List<FilmCategory> delCat = target.getFilmCategories().stream()
				.filter(item -> !filmCategories.contains(item.getCategory().getCategoryId())).collect(Collectors.toList());
		delCat.forEach(item -> target.removeFilmCategory(item));
		// Añade las categorias que faltan
		filmCategories.stream().filter(
				item -> !target.getFilmCategories().stream().anyMatch(o -> o.getCategory().getCategoryId() == item))
				.forEach(item -> target.addFilmCategory(new Category(item)));
		return target;
	}
}
