<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- <link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script
	src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
<script
	src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script> -->
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/style.css">
<script src="/js/jquery-ui.min.js"></script>
<script src="/js/bootstrap.min.js"></script>
<script src="/js/popper.min.js"></script>
<script src="/js/bill.js"></script>
</head>
<body>
<div class="overlay"></div>
	<div class="container">
		<h1>Invoice</h1>
		<div class="form-group">
			<label for="exampleInputEmail1">Party Name</label> <input type="text"
				class="form-control" id="partyName" placeholder="Party Name"
				required="required">
		</div>
		<div class="form-group">
			<label for="exampleInputEmail1">Party Address</label> <input
				type="text" class="form-control" id="partyAddress"
				placeholder="Party Address">
		</div>

		<div class="row">
			<div class="col">
				<div class="form-group">
					<label for="exampleInputEmail1">Invoice number</label> <input
						type="number" class="form-control" id="invoiceNumber"
						placeholder="Invoice Number">
				</div>
			</div>
			<div class="col">
				<div class="form-group">
					<label for="exampleFormControlSelect1">Gst %</label> <select
						class="form-control" id="gstPercentage">
						<option value="12">12</option>
						<option value="18">18</option>
					</select>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col">
				<div class="form-group">
					<label for="exampleInputEmail1">Date</label> <input type="date"
						class="form-control" id="invoiceDate" placeholder="Invoice Date">
				</div>
			</div>
			<div class="col">
				<div class="form-group">
					<label for="exampleInputEmail1">GST Number</label> <input
						type="text" class="form-control" id="gstNumber"
						placeholder="GST Number">
				</div>
			</div>
			<div class="form-group">
				<label for="exampleInputEmail1">Place Of Supply</label> <input
					type="text" class="form-control" id="placeOfSupply"
					placeholder="Place of Supply" value="24 - Gujarat">
			</div>
		</div>


		<div class="d-flex flex-row-reverse mb-2 addItem" id="test">
			<button type="button" class="btn btn-secondary">Add</button>
		</div>
		<div class="dynamicForm">
			<!-- <div class="row">
				<div class="col">
					<div class="form-group">
						<label for="exampleInputEmail1">Sr. no.</label>
						<input type="text" class="form-control" id="srNo"
							placeholder="Serial Number">
					</div>
				</div>
				<div class="col">
					<div class="form-group">
						<label for="exampleInputEmail1">Name of Material</label>
						<input type="text" class="form-control" id="nameOfMaterialName"
							placeholder="Name Of material">
					</div>
				</div>
				<div class="col">
					<div class="form-group">
						<label for="exampleInputEmail1">HSN/SAC</label>
						<input type="text" class="form-control" id="hsnsac"
							placeholder="HSN/SAC">
					</div>
				</div>
			</div>

			<div class="row">
				<div class="col">
					<div class="form-group">
						<label for="exampleInputEmail1">Quantity</label> 
						<input type="number" class="form-control" id="quantity"
							placeholder="Quantity">
					</div>
				</div>
				<div class="col">
					<div class="form-group">
						<label for="exampleInputEmail1">Rate</label>
						<input type="number" class="form-control" id="rate"
							placeholder="Rate">
					</div>
				</div>
				<div class="col">
					<div class="form-group">
						<label for="exampleInputEmail1">GST</label>
						<input type="number" class="form-control" id="gst"
							placeholder="Gst">
					</div>
				</div>
				<div class="col">
					<div class="form-group">
						<label for="exampleInputEmail1">Amount</label>
						<input type="number" class="form-control" id="amount"
							placeholder="Amount">
					</div>
				</div>
			</div> -->
		</div>
		<input type="hidden" id="grandTotal">

		<button type="submit" id="generateBill" class="btn btn-secondary">Submit</button>

	</div>
</body>
</html>