package com.example.domains.core.services.contracts;

import java.util.List;
import java.util.Optional;

import com.example.exceptions.DuplicateKeyException;
import com.example.exceptions.InvalidDataException;
import com.example.exceptions.NotFoundException;

public interface DomainService<E, K> {  // ESTO ES LO QUE VAN A HACER TODOS LOS DOMAIN PARA LA PERESISTENCIA DE SUS ENTIDADES
	List<E> getAll();		// LISTA TODOS, LISTA UNO, AÑADE, MODIFICA, BORRA.
	Optional<E>getOne(K id);
	E add(E item) throws DuplicateKeyException, InvalidDataException;
	E modify(E item) throws NotFoundException, InvalidDataException;
	void delete(E item) throws InvalidDataException;
	void deleteById(K id);
}
