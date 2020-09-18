$(document).ready(function() {

    // Variable Json keeping all product informmation 
    var rental_img = {
        "RENTAL-1": ['120.00', '80.00', 'RENT-1.jpg', 'RENT-2.jpg', 'RENT-3.jpg', 'RENT-4.jpg'],
        "RENTAL-2": ['130.00', '90.00', 'RENT-6.jpg', 'RENT-7.jpg', 'RENT-8.jpg', 'RENT-10.jpg'],
        "RENTAL-3": ['10.00', '8.00', 'RENT-11.jpg', 'RENT-12.jpg', 'RENT-13.jpg', 'RENT-14.jpg'],
        "RENTAL-4": ['220.00', '180.00', 'RENT-16.jpg', 'RENT-17.jpg', 'RENT-18.jpg', 'RENT-19.jpg'],
    };

    var product_name = getSearchParams("product");
    var product_details = rental_img[product_name];
    var product_list = product_details.slice(3);

    console.log(product_name, product_details, product_list);

    // clear the div 
    $("#image-list").html("");
    $("#thumbnail-list").html("");

    //sample product card with placeholders
    var image_div = `
    <div class="tab-pane active show" id="PRODUCT_ID">
    <a href="PRODUCT_URL" class="image-popup">
        <img src="PRODUCT_URL" class="img-fluid" alt="Colorlib Template"> </a>
    </div>
    `;

    var thumbnail_div = `
    <li class="active">
        <a data-target="#PRODUCT_ID" data-toggle="tab"><img src="PRODUCT_URL" alt="#" /></a>
    </li>
    `;

    // replacing values inside sample product card
    image_div = image_div.replace(/PRODUCT_ID/g, product_details[3]);
    image_div = image_div.replace(/PRODUCT_URL/g, "images/products/" + product_details[3]);

    thumbnail_div = thumbnail_div.replace(/PRODUCT_ID/g, product_details[3]);
    thumbnail_div = thumbnail_div.replace(/PRODUCT_URL/g, "images/products/" + product_details[3]);

    // adding created product card to images div 
    $("#image-list").append(image_div);
    $("#thumbnail-list").append(thumbnail_div);

    // looping through product json and adding product card to div 
    $.each(product_list, function(index, value) {
        // creating product image url for product's first image
        product_url = "images/products/" + value;

        //sample product card with placeholders
        var image_div = `
            <div class="tab-pane" id="PRODUCT_ID">
                <a href="PRODUCT_URL" class="image-popup">
                    <img src="PRODUCT_URL" class="img-fluid" alt="Colorlib Template"> </a>
            </div>
            `;

        var thumbnail_div = `
            <li>
                <a data-target="#PRODUCT_ID" data-toggle="tab"><img src="PRODUCT_URL" alt="#" /></a>
            </li>
            `;

        // replacing values inside sample product card
        image_div = image_div.replace(/PRODUCT_ID/g, value);
        image_div = image_div.replace(/PRODUCT_URL/g, product_url);

        thumbnail_div = thumbnail_div.replace(/PRODUCT_ID/g, value);
        thumbnail_div = thumbnail_div.replace(/PRODUCT_URL/g, product_url);


        // adding created product card to images div 
        $("#image-list").append(image_div);
        $("#thumbnail-list").append(thumbnail_div);

    });


});

function getSearchParams(k) {
    var p = {};
    location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(s, k, v) { p[k] = v })
    return k ? p[k] : p;
}