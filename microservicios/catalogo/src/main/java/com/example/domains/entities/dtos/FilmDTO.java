package com.example.domains.entities.dtos;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.example.domains.entities.Actor;
import com.example.domains.entities.Film;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @AllArgsConstructor @NoArgsConstructor
public class FilmDTO {

	@JsonProperty("id_pelicula")
	private int filmId;
	@JsonProperty("titulo")
	private String title;
	@JsonProperty("descripcion")
	private String description;
	@JsonProperty("idioma")
	private String language;
	
/*	public static Film from(FilmDTO source) {  del film a filmDTO es por si quiero que sea de entrada, meta datos
		return new Film(
				source.getFilmId(),
				source.getTitle(),
				source.getDescription(),
				source.getLanguage()
				);
	}*/
	 // para salida, del DTO a film source
	public static FilmDTO from(Film source) {
		return new FilmDTO(
				source.getFilmId(),
				source.getTitle(),
				source.getDescription(),
				source.getLanguage().getName()
				);
	}
	
	
}
