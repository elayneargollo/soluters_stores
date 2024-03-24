package soluterstoreapi.soluterstoreapi.service.interfaces;

import java.util.List;

public interface IPurchaseService {
    void finish(String email, List<String> productIds);
}
