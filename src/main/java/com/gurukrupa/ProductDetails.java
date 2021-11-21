package com.gurukrupa;

import java.io.Serializable;
import java.math.BigDecimal;

public class ProductDetails implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private int srNo;
	
	private String nameOfMsterial;
	
	private String hsnSac;
	
	private int quantity;
	
	private BigDecimal rate;
	
	private String gst;
	
	private BigDecimal amount;

	public int getSrNo() {
		return srNo;
	}

	public void setSrNo(int srNo) {
		this.srNo = srNo;
	}

	public String getNameOfMsterial() {
		return nameOfMsterial;
	}

	public void setNameOfMsterial(String nameOfMsterial) {
		this.nameOfMsterial = nameOfMsterial;
	}

	public String getHsnSac() {
		return hsnSac;
	}

	public void setHsnSac(String hsnSac) {
		this.hsnSac = hsnSac;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public BigDecimal getRate() {
		return rate;
	}

	public void setRate(BigDecimal rate) {
		this.rate = rate;
	}

	public String getGst() {
		return gst;
	}

	public void setGst(String gst) {
		this.gst = gst;
	}

	public BigDecimal getAmount() {
		return amount;
	}

	public void setAmount(BigDecimal amount) {
		this.amount = amount;
	}
	
	

}
