$(document).ready(function () {
	//alert('in');
	var now = new Date();
	var month = (now.getMonth() + 1);
	var day = now.getDate();
	if (month < 10)
		month = "0" + month;
	if (day < 10)
		day = "0" + day;
	var today = now.getFullYear() + '-' + month + '-' + day;
	$('#invoiceDate').val(today);

	let itemIndex = 1;
	getDynamicForm();

	function getDynamicForm() {
		let gstP = $('#gstPercentage').val();
		console.debug(gstP)
		$('.dynamicForm').append('<div class="row">\
			<div class="col custom-width">\
				<div class="form-group">\
					<!-- <label for="exampleInputEmail1">Sr. no.</label> -->\
					<input type="text" class="form-control srNo" id="srNo'+ itemIndex + '"\
						placeholder="Serial Number" value="'+ itemIndex + '">\
				</div>\
			</div>\
			<div class="col">\
				<div class="form-group">\
					<input type="text" class="form-control nameOfMaterialName" id="nameOfMaterialName'+ itemIndex + '" placeholder="Name Of material">\
				</div>\
			</div>\
			<div class="col custom-with-hsnsac">\
				<div class="form-group">\
					<input type="text" class="form-control hsnsac" id="hsnsac'+ itemIndex + '"\
						placeholder="HSN/SAC">\
				</div>\
			</div>\
		</div>\
		<div class="row">\
			<div class="col">\
				<div class="form-group">\
					<input type="number" class="form-control quantity"  id="quantity'+ itemIndex + '"\
						placeholder="Quantity">\
				</div>\
			</div>\
			<div class="col">\
				<div class="form-group">\
					<input type="number" class="form-control rate" id="rate'+ itemIndex + '"\
						placeholder="Rate">\
				</div>\
			</div>\
			<div class="col">\
				<div class="form-group">\
					<input type="number" class="form-control gst" id="gst'+ itemIndex + '"\
						placeholder="Gst" value="'+ gstP + '" disabled="true">\
				</div>\
			</div>\
			<div class="col">\
				<div class="form-group">\
					<input type="number" class="form-control amount" id="amount'+ itemIndex + '"\
						placeholder="Amount">\
				</div>\
			</div>\
		</div><hr>').on("change", function (e) {

			onBlurAmountChanges(e.target.id.slice(-1));

		});
	}

	function onBlurAmountChanges(itemIndex) {
		let quantity = $('#quantity' + itemIndex).val();
		let rate = $('#rate' + itemIndex).val();

		if (quantity != "" && rate != "") {
			let amount = quantity * rate;
			amount = parseInt(amount);
			$('#amount' + itemIndex).val(amount.toFixed(2));
		}
	}

	function generateTotalAmount() {
		console.debug("Thsi", itemIndex);
		let amount = 0;
		for (let i = 1; i <= itemIndex; i++) {
			amount += parseFloat($('#amount' + i).val());
			
			$('#grandTotal').val(amount.toFixed(2));
		}
	}

	$('.addItem').click(function (e) {
		itemIndex = itemIndex + 1;

		getDynamicForm();
	});

	$('#gstPercentage').change(function (e) {
		// alert('changes');
		for (let i = 1; i <= itemIndex; i++) {
			$('#gst' + i).val(e.target.value);
			// console.debug(e.target.value);
		}
	});

	$('#generateBill').click(function (e) {
		$("body").addClass("loading"); 
		generateBill();
	});

	function intToEnglish(number) {

		var NS = [
			{ value: 10000000, str: "Crore" },
			{ value: 100000, str: "Lakh" },
			{ value: 1000, str: "Thousand" },
			{ value: 100, str: "Hundred" },
			{ value: 90, str: "Ninety" },
			{ value: 80, str: "Eighty" },
			{ value: 70, str: "Seventy" },
			{ value: 60, str: "Sixty" },
			{ value: 50, str: "Fifty" },
			{ value: 40, str: "Forty" },
			{ value: 30, str: "Thirty" },
			{ value: 20, str: "Twenty" },
			{ value: 19, str: "Nineteen" },
			{ value: 18, str: "Eighteen" },
			{ value: 17, str: "Seventeen" },
			{ value: 16, str: "Sixteen" },
			{ value: 15, str: "Fifteen" },
			{ value: 14, str: "Fourteen" },
			{ value: 13, str: "Thirteen" },
			{ value: 12, str: "Twelve" },
			{ value: 11, str: "Eleven" },
			{ value: 10, str: "Ten" },
			{ value: 9, str: "Nine" },
			{ value: 8, str: "Eight" },
			{ value: 7, str: "Seven" },
			{ value: 6, str: "Six" },
			{ value: 5, str: "Five" },
			{ value: 4, str: "Four" },
			{ value: 3, str: "Three" },
			{ value: 2, str: "Two" },
			{ value: 1, str: "One" }
		];

		var result = '';
		for (var n of NS) {
			if (number >= n.value) {
				if (number <= 99) {
					result += n.str;
					number -= n.value;
					if (number > 0) result += ' ';
				} else {
					var t = Math.floor(number / n.value);
					// console.log(t);
					var d = number % n.value;
					if (d > 0) {
						return intToEnglish(t) + ' ' + n.str + ' ' + intToEnglish(d);
					} else {
						return intToEnglish(t) + ' ' + n.str;
					}

				}
			}
		}
		return result;
	}

	function generateFinancialYear() {
		var financial_year = "";
		var today = new Date();
		console.debug(today.getMonth());
		console.debug(today.getFullYear());
		if ((today.getMonth() + 1) <= 3) {
			financial_year = (today.getFullYear() - 1) + "-" + today.getFullYear()
		} else {
			financial_year = today.getFullYear() + "-" + (today.getFullYear() + 1)
		}
		return financial_year;
	}

	function generateBill() {
		generateTotalAmount();
		let productDetails = [];

		let amt = parseFloat($('#grandTotal').val());
		let gstAmt = 0;
		let grandTotal = 0;
		let gst2 = parseInt($('#gstPercentage').val());
		if (amt != "NaN") {

			gst2 = gst2 / 2;
			gstAmt = amt * gst2 / 100;
			grandTotal = amt + parseInt(gstAmt) + parseInt(gstAmt);
			grandTotal = parseInt(grandTotal);
		}

		let invoiceDate = $('#invoiceDate').val();
		var today = new Date(invoiceDate);
		var dd = String(today.getDate()).padStart(2, '0');
		var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
		var yyyy = today.getFullYear();

		invoiceDate = mm + '-' + dd + '-' + yyyy;
		console.debug(gstAmt);
		for (let i = 1; i <= itemIndex; i++) {
			let data = {
				"srNo": $('#srNo' + i).val(),
				"nameOfMsterial": $('#nameOfMaterialName' + i).val(),
				"hsnSac": $('#hsnsac' + i).val(),
				"quantity": $('#quantity' + i).val(),
				"rate": $('#rate' + i).val(),
				"gst": $('#gst' + i).val() + " %",
				"amount": parseInt($('#amount' + i).val()).toFixed(2)
			}
			if (data.srNo != "" &&
				data.nameOfMsterial != "" &&
				data.hsnSac != "" &&
				data.quantity != "" &&
				data.rate != "" &&
				data.gst != "" &&
				data.amount != "") {
				productDetails.push(data);
			}
		}
		let data = {
			"invoiceNumber": $('#invoiceNumber').val(),
			"partyName": $('#partyName').val(),
			"partyAddress": $('#partyAddress').val(),
			"date": invoiceDate,
			"gstNumber": $('#gstNumber').val(),
			"placeOfSupply": $('#placeOfSupply').val(),
			"subTotal": $('#grandTotal').val(),
			"cgst": parseInt(gstAmt).toFixed(2),
			"sgst": parseInt(gstAmt).toFixed(2),
			"gstPercentage": gst2.toString(),
			"grandTotal": grandTotal.toFixed(2),
			"amountInWord": intToEnglish(grandTotal) + ' Rupees Only',
			"financialYear": generateFinancialYear(),
			"productDetails": productDetails
		}

		if (data.invoiceNumber != "" &&
			data.partyName != "" &&
			data.partyAddress != "" &&
			data.date != "" &&
			data.gstNumber != "" &&
			data.placeOfSupply != "" &&
			data.subTotal != "" &&
			data.cgst != "" &&
			data.sgst != "" &&
			data.grandTotal != "" &&
			data.amountInWord != "" &&
			productDetails.length > 0) {

			$.ajax({
				type: "POST",
				contentType: "application/json",
				url: "/bill-generate",
				accept: 'applicatino/json',
				data: JSON.stringify(data),
				success: function (result) {
					console.debug(result);
					// window.location.href = "file:///D:/Bills/" + result;
					// window.open("D:/Bills/"+result, "_blank");
					$.ajax({
						type: "GET",
						xhrFields: {
							responseType: 'blob'
						},
						url: "/file/" + result,
						success: function (data) {
							var file = new Blob([data], { type: 'application/pdf' });
							var fileURL = URL.createObjectURL(file);
							$("body").removeClass("loading"); 
							window.location.reload();
							window.open(fileURL);
						}
					})
					// reset();
				},
				error: function (e) {
					alert("Error!")
					console.log("ERROR: ", e);
				}
			});
		} else {
			$("body").removeClass("loading"); 
		}

		console.log(data);
	}

})