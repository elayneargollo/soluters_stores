package soluterstoreapi.soluterstoreapi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import soluterstoreapi.soluterstoreapi.service.interfaces.IPurchaseService;

@RestController
@RequestMapping("/purchase")
public class PurchaseController {

    @Autowired
    private IPurchaseService purchaseService;

   @PostMapping("/finish")
    public void finish(@AuthenticationPrincipal Jwt jwt, @RequestBody List<String> productIds) {

        String email = jwt.getClaimAsString("email");
        purchaseService.finish(email, productIds);
    }
}