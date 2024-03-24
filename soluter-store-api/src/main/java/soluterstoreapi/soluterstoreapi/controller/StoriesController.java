package soluterstoreapi.soluterstoreapi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import soluterstoreapi.soluterstoreapi.model.Stories;
import soluterstoreapi.soluterstoreapi.service.interfaces.IStoriesService;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/stories")
public class StoriesController {

    @Autowired
    private IStoriesService userPurchaseHistoryService;

    @GetMapping("/{userId}")
    public List<Stories> getUserPurchaseHistory(@PathVariable String userId) {
        return userPurchaseHistoryService.findByUserId(userId);
    }
}