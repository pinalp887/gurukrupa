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

			var matches = e.target.id.match(/(\d+)/);
			onBlurAmountChanges(matches[0]);

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

		invoiceDate = dd + '-' + mm + '-' + yyyy;
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
				url: "/UGAM/bill-generate",
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
						url: "/UGAM/file/" + result,
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

	var countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central Arfrican Republic", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cuba", "Curacao", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauro", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];

	$("#partyName").keyup(function () {
		getSuggestion();
	});

	function getSuggestion() {
		let partyName = $('#partyName').val();
		if (partyName != "") {
			$.ajax({
				type: "GET",
				contentType: "application/json",
				url: "/UGAM/getSuggestions/" + partyName,
				accept: 'applicatino/json',
				success: function (result) {
					console.debug(result);
					// window.location.href = "file:///D:/Bills/" + result;

					// reset();
					autocomplete(document.getElementById("partyName"), result);
				},
				error: function (e) {
					alert("Error!")
					console.log("ERROR: ", e);
				}
			});
		}
	}

	function getClientDetails() {
		let partyName = $('#partyName').val();
		if (partyName != "") {
			$.ajax({
				type: "GET",
				contentType: "application/json",
				url: "/UGAM/getClientDetails/" + partyName,
				accept: 'applicatino/json',
				success: function (result) {
					console.debug(result);
					if (result) {
						$('#partyName').val(result.partyName);
						$('#partyAddress').val(result.partyAddress);
						$('#gstNumber').val(result.partyGstNumber);
						$('#placeOfSupply').val(result.placeOfSupply);
					}
					// window.location.href = "file:///D:/Bills/" + result;

				},
				error: function (e) {
					alert("Error!")
					console.log("ERROR: ", e);
				}
			});
		}
	}

	// autocomplete(document.getElementById("partyName"), countries);
	function autocomplete(inp, arr) {
		/*the autocomplete function takes two arguments,
		the text field element and an array of possible autocompleted values:*/
		var currentFocus;
		/*execute a function when someone writes in the text field:*/
		inp
			.addEventListener(
				"input",
				function (e) {
					var a, b, i, val = this.value;
					/*close any already open lists of autocompleted values*/
					closeAllLists();
					if (!val) {
						return false;
					}
					currentFocus = -1;
					/*create a DIV element that will contain the items (values):*/
					a = document.createElement("DIV");
					a.setAttribute("id", this.id + "autocomplete-list");
					a.setAttribute("class", "autocomplete-items");
					/*append the DIV element as a child of the autocomplete container:*/
					this.parentNode.appendChild(a);
					/*for each item in the array...*/
					for (i = 0; i < arr.length; i++) {
						/*check if the item starts with the same letters as the text field value:*/
						if (arr[i].substr(0, val.length).toUpperCase() == val
							.toUpperCase()) {
							/*create a DIV element for each matching element:*/
							b = document.createElement("DIV");
							/*make the matching letters bold:*/
							b.innerHTML = "<strong>"
								+ arr[i].substr(0, val.length)
								+ "</strong>";
							b.innerHTML += arr[i].substr(val.length);
							/*insert a input field that will hold the current array item's value:*/
							b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
							/*execute a function when someone clicks on the item value (DIV element):*/
							b
								.addEventListener(
									"click",
									function (e) {
										/*insert the value for the autocomplete text field:*/
										inp.value = this
											.getElementsByTagName("input")[0].value;
											console.debug("value ", inp.value);
											getClientDetails();
										/*close the list of autocompleted values,
										(or any other open lists of autocompleted values:*/
										closeAllLists();
									});
							a.appendChild(b);
						}
					}
				});
		/*execute a function presses a key on the keyboard:*/
		inp.addEventListener("keydown", function (e) {
			var x = document.getElementById(this.id + "autocomplete-list");
			if (x)
				x = x.getElementsByTagName("div");
			if (e.keyCode == 40) {
				/*If the arrow DOWN key is pressed,
				increase the currentFocus variable:*/
				currentFocus++;
				/*and and make the current item more visible:*/
				addActive(x);
			} else if (e.keyCode == 38) { //up
				/*If the arrow UP key is pressed,
				decrease the currentFocus variable:*/
				currentFocus--;
				/*and and make the current item more visible:*/
				addActive(x);
			} else if (e.keyCode == 13) {
				/*If the ENTER key is pressed, prevent the form from being submitted,*/
				e.preventDefault();
				if (currentFocus > -1) {
					/*and simulate a click on the "active" item:*/
					if (x)
						x[currentFocus].click();
				}
			}
		});
		function addActive(x) {
			/*a function to classify an item as "active":*/
			if (!x)
				return false;
			/*start by removing the "active" class on all items:*/
			removeActive(x);
			if (currentFocus >= x.length)
				currentFocus = 0;
			if (currentFocus < 0)
				currentFocus = (x.length - 1);
			/*add class "autocomplete-active":*/
			x[currentFocus].classList.add("autocomplete-active");
		}
		function removeActive(x) {
			/*a function to remove the "active" class from all autocomplete items:*/
			for (var i = 0; i < x.length; i++) {
				x[i].classList.remove("autocomplete-active");
			}
		}
		function closeAllLists(elmnt) {
			/*close all autocomplete lists in the document,
			except the one passed as an argument:*/
			var x = document.getElementsByClassName("autocomplete-items");
			for (var i = 0; i < x.length; i++) {
				if (elmnt != x[i] && elmnt != inp) {
					x[i].parentNode.removeChild(x[i]);
				}
			}
		}
		/*execute a function when someone clicks in the document:*/
		document.addEventListener("click", function (e) {
			closeAllLists(e.target);
		});
	}


})