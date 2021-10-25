package com.example.infraestructure.repositories;

import java.util.Date;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.example.domains.entities.Language;
import com.example.domains.entities.Language;

public interface LanguageRepository extends JpaRepository<Language, Integer> {

	<T> List<T> findByLanguageIdIsNotNull(Class<T> type);
	<T> Iterable<T> findByLanguageIdIsNotNull(Sort sort, Class<T> type);
//	<T> Page<T> findByLanguageIdIsNotNull(Pageable pageable, Class<T> type);
	
	@Query("FROM Language a WHERE a.lastUpdate > ?1")
	List<Language> laMia(Date fecha);
}
