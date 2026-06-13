package com.shopsphere.backend.config;

import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

@Component
@EnableScheduling
public class KeepAlive {

    // Pings itself every 10 minutes to prevent sleep
    @Scheduled(fixedDelay = 600000)
    public void keepAlive() {
        try {
            RestTemplate restTemplate = new RestTemplate();
            restTemplate.getForObject(
                    "https://shopsphere-production-fee5.up.railway.app/api/products?size=1",
                    String.class);
            System.out.println("Keep-alive ping sent");
        } catch (Exception e) {
            // Ignore errors
        }
    }
}