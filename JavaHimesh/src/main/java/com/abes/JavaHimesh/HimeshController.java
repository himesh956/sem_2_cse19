package com.abes.JavaHimesh;

import org.springframework.http.HttpStatus; 
import org.springframework.http.ResponseEntity; 
import org.springframework.web.bind.annotation.*; 
 
@RestController 
@RequestMapping("/") 
public class HimeshController {
	 private Himesh student; 

	    @GetMapping 
	    public String welcomeMessage() { 
	        return "Welcome to Management REST API"; 
	    } 
	 
	    @GetMapping("/student") 
	    public ResponseEntity<Himesh> getStudent() { 
	        if (student == null) { 
	            return new ResponseEntity<>(HttpStatus.NOT_FOUND); 
	        }
	        return new ResponseEntity<>(student, HttpStatus.OK); 
	    } 
	 
	    @PostMapping("/student") 
	    public ResponseEntity<Himesh> createStudent(@RequestBody Himesh student) { 
	 
	        this.student = student; 
	        return new ResponseEntity<>(student, HttpStatus.CREATED); 
	    } 
	} 