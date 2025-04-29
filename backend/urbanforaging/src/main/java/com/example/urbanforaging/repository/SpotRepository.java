package com.example.urbanforaging.repository;

import com.example.urbanforaging.model.Spot;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SpotRepository extends JpaRepository<Spot, Long> {
}