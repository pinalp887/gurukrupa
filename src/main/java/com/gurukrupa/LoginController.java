package com.gurukrupa;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class LoginController {

	@RequestMapping(value="/login", method = RequestMethod.GET)
    public String showLoginPage(ModelMap model){
        return "Welcome";
    }
	
	
	@RequestMapping(value="/bill", method = RequestMethod.GET)
    public String showBillPage(ModelMap model){
        return "GenerateBill";
    }
	
	@RequestMapping(value="/bill1", method = RequestMethod.GET)
    public String showBillPage1(ModelMap model){
        return "newbill";
    }
	
	@RequestMapping(value="/july", method = RequestMethod.GET)
    public String july(ModelMap model){
        return "july";
    }
}
