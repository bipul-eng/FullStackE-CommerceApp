package com.bk.modal;

public class PaymentDetails {
	
	private String paymentMethod;
	private String status;
	private String paymentId;
	private String razorpayPaymentLinkId;
	private String razorpayLinkReferenceId;
	private String razorpayPaymentLinkStatus;
	private String razorpayPaymentId;
	
	public String getPaymentMethod() {
		return paymentMethod;
	}
	public void setPaymentMethod(String paymentMethod) {
		this.paymentMethod = paymentMethod;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getPaymentId() {
		return paymentId;
	}
	public void setPaymentId(String paymentId) {
		this.paymentId = paymentId;
	}
	public String getRazorpayPaymentLinkId() {
		return razorpayPaymentLinkId;
	}
	public void setRazorpayPaymentLinkId(String razorpayPaymentLinkId) {
		this.razorpayPaymentLinkId = razorpayPaymentLinkId;
	}
	public String getRazorpayLinkReferenceId() {
		return razorpayLinkReferenceId;
	}
	public void setRazorpayLinkReferenceId(String razorpayLinkReferenceId) {
		this.razorpayLinkReferenceId = razorpayLinkReferenceId;
	}
	public String getRazorpayPaymentLinkStatus() {
		return razorpayPaymentLinkStatus;
	}
	public void setRazorpayPaymentLinkStatus(String razorpayPaymentLinkStatus) {
		this.razorpayPaymentLinkStatus = razorpayPaymentLinkStatus;
	}
	public String getRazorpayPaymentId() {
		return razorpayPaymentId;
	}
	public void setRazorpayPaymentId(String razorpayPaymentId) {
		this.razorpayPaymentId = razorpayPaymentId;
	}
	public PaymentDetails() {
		super();
	}
	public PaymentDetails(String paymentMethod, String status, String paymentId, String razorpayPaymentLinkId,
			String razorpayLinkReferenceId, String razorpayPaymentLinkStatus, String razorpayPaymentId) {
		super();
		this.paymentMethod = paymentMethod;
		this.status = status;
		this.paymentId = paymentId;
		this.razorpayPaymentLinkId = razorpayPaymentLinkId;
		this.razorpayLinkReferenceId = razorpayLinkReferenceId;
		this.razorpayPaymentLinkStatus = razorpayPaymentLinkStatus;
		this.razorpayPaymentId = razorpayPaymentId;
	}
	
	

}
