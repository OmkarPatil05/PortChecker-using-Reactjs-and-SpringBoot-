package com.ompatil.portchecker.controller;

import com.ompatil.portchecker.service.PortCheckerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin( origins = "http://localhost:3000")
@RestController
public class PortCheckerController {

    @Autowired
    PortCheckerService portCheckerService;

    @GetMapping("/getPortInfo/{portNumber}")
    public ResponseEntity<Boolean> getPortInfo(@PathVariable Integer portNumber){
            Boolean isPortFree = portCheckerService.getPortInfo(portNumber);

            return ResponseEntity.ok(isPortFree);
    }
}
