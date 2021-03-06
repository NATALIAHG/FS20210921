package com.example.domains.core;

import java.beans.Transient;
import java.util.Set;

import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;

import com.fasterxml.jackson.annotation.JsonIgnore;

// CLASE BSAE DE TODAS LAS ENTIDADES
public abstract class EntityBase<E> {	// E, es generica para pasar distintos tipos, actor, persona,etc
	private Validator validator = Validation.buildDefaultValidatorFactory().getValidator();

	@Transient
	@JsonIgnore
	public Set<ConstraintViolation<E>> getErrors() {
		return validator.validate((E) this);
	}
	
	@JsonIgnore
	@Transient
	public String getErrorsString() {
		Set<ConstraintViolation<E>> lst = getErrors();
		if(lst.isEmpty()) return "";
		StringBuilder sb = new StringBuilder("ERRORES:");
		lst.forEach(item -> sb.append(" " + item.getPropertyPath() + ": " + item.getMessage() + "."));
		return sb.toString();
	}
	
	@Transient
	@JsonIgnore
	public boolean isValid() {
		return getErrors().size() == 0;
	}
	
	@Transient
	@JsonIgnore
	public boolean isInvalid() {
		return !isValid();
	}
}
