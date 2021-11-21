<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/style.css">
<script src="/js/jquery-ui.min.js"></script>
<script src="/js/bootstrap.min.js"></script>
<script src="/js/popper.min.js"></script>
</head>
<body>
	<div class="container">

		<table class="mt-3 table table-borderless"
			style="border: 2px solid; border-collapse: collapse; border-spacing: 0;">

			<tbody>
				<tr style="border: solid">
					<th scope="col" colspan="7"
						style="align-items: center; text-align: center; font-size: 18px; padding: 0px 0px 0px 0px; font: italic bold 18px 'Calibri'; background-color: rgb(190, 202, 212);"><b><i>UGAM
								INDUSTRIES</i></b></th>
				</tr>
				<tr>
					<td colspan="7"
						style="align-items: center; text-align: center; font-size: 14px; padding: 0px 0px 0px 0px; font: italic 14px 'Calibri'; border-bottom: 1px solid black;">5,
						ARTI SOCIETY., PLOT NO. 130/A, GURUKRUPA INDUSTRIES, OPP. SHIV
						PAN, ARTI SOCIETY MAIN ROAD, RAJKOT-360002. MO: 9913310863</td>

				</tr>
				<tr>
					<td class="mt-1 p-1" colspan="7"
						style="font: bold 14px 'Calibri'; align-items: center; text-align: center; border-bottom: 1px solid black;">TAX
						INVOICE</td>
				</tr>
				<tr>
					<!-- <th scope="row">3</th> -->
					<td colspan="3" rowspan="4"
						style="border: 1px solid black; padding: 0;padding-left:3px;font: bold 15px 'Calibri'; line-height: 18px;">${PARTY_NAME}
						<div style="padding-left:3px; font: 15px 'Calibri'; line-height: 18px;">${PARTY_ADDRESS}</div>
					</td>
					<td colspan="2"
						style="background-color: rgb(190, 202, 212); border: 1px solid black; padding: 0; padding-left:3px;font: bold 15px 'Calibri'; line-height: 18px;">Invoice
						No:</td>
					<td colspan="2"
						style="background-color: rgb(190, 202, 212); border: 1px solid black; padding: 0;padding-left:3px;font: bold 15px 'Calibri'; line-height: 18px;">${INVOICE_NUMBER}</td>
				</tr>
				<tr>
					<!-- <th scope="row">3</th> -->
					<td colspan="2"
						style="background-color: rgb(190, 202, 212); border: 1px solid black; padding: 0;padding-left:3px;font: bold 15px 'Calibri'; line-height: 18px;">Date
						:</td>
					<td colspan="2"
						style="background-color: rgb(190, 202, 212); border: 1px solid black; padding: 0;padding-left:3px;font: bold 15px 'Calibri'; line-height: 18px;">${DATE}</td>

				</tr>
				<tr>
					<!-- <th scope="row">3</th> -->
					<td colspan="4" style="border: 1px solid black; padding: 0;"></td>
				</tr>
				<tr>
					<!-- <th scope="row">3</th> -->
					<td colspan="4" style="border: 1px solid black; padding: 0;"></td>
				</tr>
				<tr>
					<td colspan="3" style="border: 1px solid black; padding: 0;padding-left:3px;font: bold 15px 'Calibri'; line-height: 18px;">GSTIN
						No. : ${GST_NUMBER}</td>
					<td colspan="4" style="border: 1px solid black; padding: 0;padding-left:3px;font: bold 15px 'Calibri'; line-height: 18px;">Place
						of Supply : ${PLACE_SUPPLY}</td>


				</tr>
				<tr>
					<td
						style="border: 1px solid black; padding: 0; width: 35px; font-size: 10px; text-align: center;font: bold 9px 'Calibri'; line-height: 11px;"><b>Sr.
						No.</b></td>
					<td style="border: 1px solid black; padding: 0; width: 200px;font: bold 15px 'Calibri'; line-height: 18px;"><b>Name
						Of Material</b></td>
					<td
						style="border: 1px solid black; padding: 0; width: 100px; text-align: center;font: bold 15px 'Calibri'; line-height: 18px;"><b>HSN/SAC</b></td>
					<td
						style="border: 1px solid black; padding: 0; width: 100px; text-align: center;font: bold 15px 'Calibri'; line-height: 18px;"><b>Quantity</b></td>
					<td
						style="border: 1px solid black; padding: 0; width: 75px; text-align: center;font: bold 15px 'Calibri'; line-height: 18px;"><b>Rate</b></td>
					<td
						style="border: 1px solid black; padding: 0; width: 50px; text-align: center;font: bold 15px 'Calibri'; line-height: 18px;"><b>GST%</b></td>
					<td
						style="border: 1px solid black; padding: 0; width: 120px; font-size: 14px; text-align: center;font: bold 15px 'Calibri'; line-height: 18px;"><b>Amount</b></td>

				</tr>
				${MATERIAL_DETAILS}
				<tr style="border: 1px solid;">
					<td colspan="4" style="background-color: rgb(190, 202, 212);border: 1px solid; font-size: 12px;font: bold 15px 'Calibri'; line-height: 18px;">GSTIN
						No. : 24BKBPV2152E1ZG</td>
					<td colspan="3" style="background-color: rgb(190, 202, 212);border: 1px solid; font-size: 14px;font: bold 15px 'Calibri'; line-height: 18px;">Sub
						Total : ${SUB_TOTAL}</td>
				</tr>
				<tr style="border: 1px solid;">
					<td colspan="4" style="border: 1px solid;"></td>
					<td colspan="3" style="border: 1px solid; font-size: 14px;font: bold 15px 'Calibri'; line-height: 18px;"><div>Taxable
							Amount :</div>
						<div>CGST : 6% ${CGST}</div>

						<div>SGST : 6% ${SGST}</div></td>
				</tr>

				<tr style="border: 1px solid;">
					<td colspan="4" style="border: 1px solid; font-size: 14px;">Amount
						In Words : <b>${AMOUNT_IN_WORD}</b>
					</td>
					<td colspan="3" style="background-color: rgb(190, 202, 212);border: 1px solid;font: bold 15px 'Calibri'; line-height: 18px;">Grand Total : <b>${GRAND_TOTAL}</b></td>
				</tr>
				<tr style="border: 1px solid;">
					<td colspan="4" style="border: 1px solid; font-size: 12px;"><div>Terms
							& Condition :</div>
						<div>1.Goods once sold will not be taken back.</div>
						<div>2.Interest @18% p.a. will be charged if payment is not
							made within due date.</div>
						<div>3.Our risk and responsibility ceases as soon as the
							goods leave our premises.</div>
						<div>4."E.&.O.E. "</div></td>
					<td colspan="3"
						style="border: 1px solid; font-size: 12px; position: relative;"><div>For,
							UGAM INDUSTRIES</div>

						<div style="bottom: 0; position: absolute; right: 10px;">(Authorized
							Signatory)</div></td>
				</tr>
			</tbody>
		</table>
	</div>
</body>
</html>
