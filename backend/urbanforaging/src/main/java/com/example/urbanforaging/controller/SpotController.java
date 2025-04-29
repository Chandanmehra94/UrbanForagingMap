package com.example.urbanforaging.controller;

import com.example.urbanforaging.model.Spot;
import com.example.urbanforaging.repository.SpotRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/spots")

public class SpotController {
    @Autowired
    private SpotRepository spotRepository;

    @GetMapping
    public List<Spot> getAllSpots() {
        return spotRepository.findAll();
    }

    @PostMapping
    public Spot addSpot(@RequestBody Spot spot) {
        return spotRepository.save(spot);
    }
}