package com.example.application.resource;

import java.net.URI;
import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.example.domains.contracts.services.FilmService;
import com.example.domains.entities.Actor;
import com.example.domains.entities.Category;
import com.example.domains.entities.dtos.ActorDTO;
import com.example.domains.entities.dtos.FilmDTO;
import com.example.domains.entities.dtos.FilmDTOpostPut;
import com.example.domains.entities.dtos.FilmShort;
import com.example.exceptions.BadRequestException;
import com.example.exceptions.DuplicateKeyException;
import com.example.exceptions.InvalidDataException;
import com.example.exceptions.NotFoundException;

@RestController
@RequestMapping(path = "/peliculas")
public class FilmResource {

	@Autowired
	FilmService srv;
	
	@GetMapping
	public List<FilmDTO> getAll(@RequestParam(required = false) String sort) {
		if(sort== null)
			return srv.getByProjection(FilmDTO.class);
		else
			return (List<FilmDTO>) srv.getByProjection(Sort.by(sort), FilmDTO.class);
	}
	
	@GetMapping(params = "page")
	public Page<FilmDTO> getAllPageable(Pageable item) {
		return srv.getByProjection(item, FilmDTO.class);
	}

	@GetMapping(path = "/{id}")
	public FilmDTO getOne(@PathVariable int id) throws NotFoundException {
		var Film = srv.getOne(id);
		if(Film.isEmpty())
			throw new NotFoundException();
		else
			return FilmDTO.from(Film.get());
	}
	
	@GetMapping(path = "/{id}/actores")
	@Transactional
	public List<ActorDTO> getPelis(@PathVariable int id) throws NotFoundException {
		var film = srv.getOne(id);
		if(film.isEmpty())
			throw new NotFoundException();
		else {
			return (List<ActorDTO>) film.get().getFilmActors().stream().map(item -> ActorDTO.from(item.getActor())).collect(Collectors.toList());
		}
	}
	
	@PostMapping		//USANDO EL SERVICIO HAGO EL CREATE,  LUEGO AÑADO EL ELEMENTO Y LO MODIFICO
	public ResponseEntity<Object> create(@Valid @RequestBody FilmDTOpostPut item) throws BadRequestException, DuplicateKeyException, InvalidDataException, NotFoundException {
		if(item == null)
			throw new BadRequestException("Faltan los datos");
		var newItem = srv.add(FilmDTOpostPut.from(item)); // falta pasar las categorias y guardar
		item.getFilmActors().forEach(idactor->newItem.addFilmActor(new Actor(idactor)));
		item.getFilmCategories().forEach(idcategory->newItem.addFilmCategory(new Category(idcategory)));
		srv.modify(newItem);
		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
			.buildAndExpand(newItem.getFilmId()).toUri();
		return ResponseEntity.created(location).build();

	}

	@PutMapping("/{id}")
	//@ResponseStatus(HttpStatus.NO_CONTENT)
	public FilmDTOpostPut update(@PathVariable int id, @Valid @RequestBody FilmDTOpostPut item) throws BadRequestException, NotFoundException, InvalidDataException {
		if(item == null)
			throw new BadRequestException("Faltan los datos");
		if(id != item.getFilmId())
			throw new BadRequestException("No coinciden los identificadores");
		return FilmDTOpostPut.from(srv.modify(FilmDTOpostPut.from(item)));	
	}

	@DeleteMapping("/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void delete(@PathVariable int id) {
		srv.deleteById(id);
	}
	
}
