$(document).ready(function() {

    // Variable Json keeping all product informmation 
    var image_list = {
        "productF": ['product-1.jpeg', 'product-2.jpg', 'product-3.jpg', 'product-5.jpg'],
        "cakes": ['c1.jpg', 'c2.jpg', 'c3.jpg', 'c4.jpg', 'c5.jpg'],
        "plane": ['p1.jpg', 'p2.jpg', 'p3.jpg', 'p4.jpg', 'p5.jpg'],
        "toys": ['t1.jpg', 't2.jpg', 't3.jpg', 't4.jpg', 't5.jpg'],
    }

    var product_name = getSearchParams("product");
    var product_list = image_list[product_name];

    // clear the div 
    $("#image-list").html("");

    // looping through product json and adding product card to div 
    $.each(product_list, function(index, value) {
        // creating product image url for product's first image
        product_url = "./image_display/" + product_name + "/" + value;

        //sample product card with placeholders
        var image_div = `
        <div class="w3-card-4" style=" width: 20vh; height:26vh;float: left;margin-left: 1%;">
            <img src=" PRODUCT_URL " style="width: 20vh; height:20vh">
            <div class="w3-container w3-center">
                <p>PRODUCT_NAME</p>
            </div>
        </div>
        `
            // replacing values inside sample product card
        image_div = image_div.replace(/PRODUCT_NAME/g, product_name);
        image_div = image_div.replace(/PRODUCT_URL/g, product_url);

        // adding created product card to images div 
        $("#image-list").append(image_div);

    });


});

function getSearchParams(k) {
    var p = {};
    location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(s, k, v) { p[k] = v })
    return k ? p[k] : p;
}