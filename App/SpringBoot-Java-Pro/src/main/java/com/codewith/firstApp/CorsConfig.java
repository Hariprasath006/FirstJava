//package com.codewith.firstApp;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.web.servlet.config.annotation.CorsRegistry;
//import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
//
//@Configuration
//public class CorsConfig {
//
//    @Bean
//    public WebMvcConfigurer corsConfigurer() {
//        return new WebMvcConfigurer() {
//            @Override
//            public void addCorsMappings(CorsRegistry registry) {
//                registry.addMapping("/**")
//                        .allowedOrigins("*")   // ✅ Safe quick fix
//                        .allowedMethods("*")
//                        .allowedHeaders("*");
//            }
//        };
//    }
//}

package com.codewith.firstApp;   // ✅ KEEP YOUR PACKAGE

import org.springframework.context.annotation.Bean;          // ✅ ADD
import org.springframework.context.annotation.Configuration; // ✅ ADD
import org.springframework.web.servlet.config.annotation.CorsRegistry;      // ✅ ADD
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;  // ✅ ADD

@Configuration
public class CorsConfig {

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowedOriginPatterns("*")   // 🔥 FINAL FIX
                        .allowedMethods("*")
                        .allowedHeaders("*");
            }
        };
    }
}

