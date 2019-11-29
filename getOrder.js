//CHECKSUM:f95e6a604896b8590c97c8c6c499de5acd471c12c8e20f6069496655307f54c4
/**
 * Get  order data
 * @title Get order data
 * @category Storage
 * @author Botpress, Inc.
 * @param {string} orderData - The name of the variable
 * @param {string} dataOutput - The data Output
 * @param {string} msgOutput - The message Output
 */
const getOrderData = async (orderData, dataOutput, msgOutput) => {
  var menu = [{
        "nama":"nasi timbel",
        "harga":30000
      },{
        "nama":"nasi bakar cumi",
        "harga":20000
      },{
        "nama":"nasi tutug oncom",
        "harga":25000
      },{
        "nama":"karedok",
        "harga":18000
      },{
        "nama":"soto kuning bogor",
        "harga":15000
      },{
        "nama":"es cendol",
        "harga":10000
      },{
        "nama":"es oyen",
        "harga":10000
      },{
        "nama":"es goyobod",
        "harga":10000
      },{
        "nama":"es doger",
        "harga":10000
      },{
        "nama":"es cendol",
        "harga":10000
      },{
        "nama":"bandrek",
        "harga":10000
      }];

  var data = {
    "your-order": "",
    "total-order": 0
  }

  if(temp[dataOutput]===undefined){
    temp[dataOutput] = JSON.stringify(data)
  }
      
  var myOrder = orderData.split("-");
  if(myOrder.length == 2){
    var picked = menu.find(o => myOrder[0].toLowerCase().includes(o.nama))
    if(picked!=null){
      var totalprice = parseInt(myOrder[1].replace(" ", ""))*picked.harga
      var data = JSON.parse(temp[dataOutput])
      temp[msgOutput] = "You order "+myOrder[1].replace(" ", "")+ " "+picked.nama+" @ "+picked.harga.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })+" total price "+totalprice.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })
      data = {
        "your-order": data["your-order"]+myOrder[1].replace(" ", "")+ " "+picked.nama+" @ "+picked.harga.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })+" total price "+totalprice.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })+",",
        "total-order": data["total-order"]+totalprice
      }
      temp[dataOutput] = JSON.stringify(data)
    }else{
      temp[msgOutput] = "The menu you entered is not available"
    }
  }else{
    if(orderData == "nope" || orderData == "Nope") {
      temp[msgOutput] = "Please, check your order."
      data = JSON.parse(temp[dataOutput])
      temp[dataOutput] = data["your-order"]+" Total price of all orders: "+data["total-order"].toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })
    }
    else
    temp[msgOutput] = "The order format you entered is incorrect"
  }
}
return getOrderData(args.orderData, args.dataOutput, args.msgOutput)


  