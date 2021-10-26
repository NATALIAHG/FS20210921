package com.example.domains.entities.dtos;

import java.math.BigDecimal;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collector;

import org.hibernate.transform.ToListResultTransformer;
import org.springframework.beans.factory.parsing.SourceExtractor;

import com.example.domains.entities.Actor;
import com.example.domains.entities.Film;
import com.example.domains.entities.FilmActor;
import com.example.domains.entities.FilmCategory;
import com.example.domains.entities.Language;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @AllArgsConstructor @NoArgsConstructor
public class FilmDTOpostPut {
	@JsonProperty("id")
	private int FilmId;
	@JsonProperty("titulo")
	private String title;
	@JsonProperty("descripcion")
	private String description;
	//@JsonProperty("idioma")
//	private int languageid;
	@JsonProperty("length")
	private int length;
	@JsonProperty("rating")
	private String rating;
	@JsonProperty("releaseYear")
	private Short releaseYear;
	@JsonProperty("rentalDuration")
	private byte rentalDuration;
	@JsonProperty("rentalRate")
	private BigDecimal rentalRate;
	@JsonProperty("replacementCost")
	private BigDecimal replacementCost;
	@JsonProperty("language")
	private Language language;
	@JsonProperty("languageVO")
	private Language languageVO;
	@JsonProperty("filmActors")
	private List<FilmActor> filmActors;
	@JsonProperty("filmCategories")
	private List<FilmCategory> filmCategories;
	
	
	public static Film from(FilmDTOpostPut source) {
		Film peliFilm =  new Film(
				source.getFilmId(),
				source.getTitle(),
			//	new Language(source.getLanguageid()),
				source.getDescription(),
				source.getLength(),
				source.getRating(),
				source.getReleaseYear(),
				source.getRentalDuration(),
				source.getRentalRate(),
				source.getReplacementCost(),
				source.getLanguage(),
				source.getLanguageVO(),
				source.getFilmActors(),
				source.getFilmCategories()						
				);
		//recorremos la coleccion añadiendo el idactor
		source.filmActors.forEach(idactor->peliFilm.addFilmActor(new Actor(idactor)));
		return peliFilm;
	}
	public static FilmDTOpostPut from(Film source) {
		return new FilmDTOpostPut(
			source.getFilmId(),
			source.getDescription(),
			source.getLength(),
			source.getRating(),
			source.getReleaseYear(),
			source.getRentalDuration(),
			source.getRentalRate(),
			source.getReplacementCost(),	
			source.getTitle(),
			source.getLanguage().getLanguageId(),
			source.getLanguageVO(),			
			 //stream convierte un array en un flujo para consultas, map coge elemento entrada y devuelve valor de salida
			//collect para materializarlo en una tabla  collect(collect.toList()),
			source.getFilmActors().stream().map(item->item.getActor().getActorId()).collect(Collection.toList()),
			source.getFilmCategories()			
			);
	}
}
