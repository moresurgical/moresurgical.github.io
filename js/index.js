$(document).ready(function() {

    // Variable Json keeping all product informmation 
    var image_list = {
        "productF": ['product-1.jpeg', 'product-2.jpg', 'product-3.jpg', 'product-5.jpg'],
        "cakes": ['c1.jpg', 'c2.jpg', 'c3.jpg', 'c4.jpg', 'c5.jpg'],
        "plane": ['p1.jpg', 'p2.jpg', 'p3.jpg', 'p4.jpg', 'p5.jpg'],
        "toys": ['t1.jpg', 't2.jpg', 't3.jpg', 't4.jpg', 't5.jpg'],
    }

    // # Loading product cards inside div with id "images"

    // clear the div 
    $("#images").html("");

    // looping through product json and adding product card to div 
    $.each(image_list, function(key, value) {

        //fetching value of product name and creating product image url for product's first image
        product_name = key;
        product_url = "./image_display/" + product_name + "/" + value[0];

        //sample product card with placeholders
        var image_div = `
        <div class="w3-card-4 product" style="width: 30vh;height30vh;float: left;margin-left: 1%;" product-name="PRODUCT_NAME">
            <image_display src=" PRODUCT_URL " style="width: 30vh;height30vh;">
            <div class="w3-container w3-center">
                <p>PRODUCT_NAME</p>
            </div>
        </div>
        `
            // replacing values inside sample product card
        image_div = image_div.replace(/PRODUCT_NAME/g, product_name);
        image_div = image_div.replace(/PRODUCT_URL/g, product_url);

        // adding created product card to images div 
        $("#images").append(image_div);

    });


    //on click event of product card using css class product
    $(".product").click(function() {

        //stroing attribute product-name to a variable
        var product_name = $(this).attr("product-name");
        // alert(product_name);

        //next page url appending product name, also removing spaces
        var next_page_url = "./product-single.html?product=" + product_name.trim();
        window.open(next_page_url, "_blank");

    })

});