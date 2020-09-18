$(document).ready(function() {

    // Variable Json keeping all product informmation 
    var rental_img = {
        "RENTAL-1": ['120.00', '80.00', 'RENT-1.jpg', 'RENT-2.jpg', 'RENT-3.jpg', 'RENT-4.jpg', 'RENT-5.jpg'],
        "RENTAL-2": ['130.00', '90.00', 'RENT-6.jpg', 'RENT-7.jpg', 'RENT-8.jpg', 'RENT-9.jpg', 'RENT-10.jpg'],
        "RENTAL-3": ['10.00', '8.00', 'RENT-11.jpg', 'RENT-12.jpg', 'RENT-13.jpg', 'RENT-14.jpg', 'RENT-15.jpg'],
        "RENTAL-4": ['220.00', '180.00', 'RENT-16.jpg', 'RENT-17.jpg', 'RENT-18.jpg', 'RENT-19.jpg', 'RENT-20.jpg'],
    }

    // # Loading product cards inside div with id "images"

    // clear the div 
    $("#rental_products").html("");

    // looping through product json and adding product card to div 
    $.each(rental_img, function(key, value) {

        //fetching value of product name and creating product image url for product's first image
        product_name = key;
        product_price = value[0];
        product_sale_price = value[1];
        product_url = "images/products/" + value[2];

        //sample product card with placeholders
        var image_div = `
        <div class="col-md-6 col-lg-3">
            <div class="product">
                <a href="product-single.html?product=PRODUCT_NAME" class="img-prod"><img class="img-fluid" src="PRODUCT_URL"
                        alt="Colorlib Template">
                    <div class="overlay"></div>
                </a>
                <div class="text py-3 pb-4 px-3 text-center">
                    <h3><a href="#">PRODUCT_NAME</a></h3>
                    <div class="d-flex">
                        <div class="pricing">
                            <p class="price"><span class="mr-2 price-dc">$PRODUCT_PRICE</span><span
                                    class="price-sale">$PRODUCT_SALE_PRICE</span></p>
                        </div>
                    </div>
                    <div class="bottom-area d-flex px-3">
                        <div class="m-auto d-flex">
                            <a href="#"
                                class="add-to-cart d-flex justify-content-center align-items-center text-center">
                                <span><i class="ion-ios-menu"></i></span>
                            </a>
                            <a href="#"
                                class="buy-now d-flex justify-content-center align-items-center mx-1">
                                <span><i class="ion-ios-cart"></i></span>
                            </a>
                            <a href="#"
                                class="heart d-flex justify-content-center align-items-center ">
                                <span><i class="ion-ios-heart"></i></span>
                            </a>
                        </div>
                    </div>
				</div>
			</div>
		</div>
        `;

        // replacing values inside sample product card
        image_div = image_div.replace(/PRODUCT_NAME/g, product_name);
        image_div = image_div.replace(/PRODUCT_URL/g, product_url);
        image_div = image_div.replace(/PRODUCT_PRICE/g, product_price);
        image_div = image_div.replace(/PRODUCT_SALE_PRICE/g, product_sale_price);

        // adding created product card to images div 
        $("#rental_products").append(image_div);

    });


    //on click event of product card using css class product
    $(".product").click(function() {

        //stroing attribute product-name to a variable
        var product_name = $(this).attr("product-name");
        // alert(product_name);

        //next page url appending product name, also removing spaces
        var next_page_url = "./detail.html?product=" + product_name.trim();
        window.open(next_page_url, "_blank");

    })

});