package com.gurukrupa;

public class ClientDetails {

	private String partyName;
	
	private String partyAddress;
	
	private String partyGstNumber;
	
	private String placeOfSupply;

	
	public ClientDetails() {
		super();
		// TODO Auto-generated constructor stub
	}

	public ClientDetails(String partyName, String partyAddress, String partyGstNumber, String placeOfSupply) {
		super();
		this.partyName = partyName;
		this.partyAddress = partyAddress;
		this.partyGstNumber = partyGstNumber;
		this.placeOfSupply = placeOfSupply;
	}

	public String getPartyName() {
		return partyName;
	}

	public void setPartyName(String partyName) {
		this.partyName = partyName;
	}

	public String getPartyAddress() {
		return partyAddress;
	}

	public void setPartyAddress(String partyAddress) {
		this.partyAddress = partyAddress;
	}

	public String getPartyGstNumber() {
		return partyGstNumber;
	}

	public void setPartyGstNumber(String partyGstNumber) {
		this.partyGstNumber = partyGstNumber;
	}

	public String getPlaceOfSupply() {
		return placeOfSupply;
	}

	public void setPlaceOfSupply(String placeOfSupply) {
		this.placeOfSupply = placeOfSupply;
	}
	
}
