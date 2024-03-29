package com.example.showmethemoney2.service;

import com.example.showmethemoney2.dto.Google2Response;
import com.example.showmethemoney2.dto.Naver2Response;
import com.example.showmethemoney2.dto.OAuth2Response;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

@Service
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;

public class CustomOAuth2UserService extends DefaultOAuth2UserService {

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        OAuth2User oAuth2User = super.loadUser(userRequest);
        System.out.println(oAuth2User.getAttributes());

        String registrationId = userRequest.getClientRegistration().getRegistrationId();
        OAuth2Response oAuth2Response = null;
        if (registrationId.equals("naver")) {

            oAuth2Response = new Naver2Response(oAuth2User.getAttributes());
        } else if (registrationId.equals("google")) {

            oAuth2Response = new Google2Response(oAuth2User.getAttributes());
        } else {

            return null;
        }
    }
}
