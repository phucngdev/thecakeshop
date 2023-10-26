<?php 
    include 'page/header.html';
?>
<div class="content-page">
    <div class="content-page-mg">
        <?php
            if (isset($_GET['page'])) {
                $page = $_GET['page'];
                if($page == 'home') {
                    include './page/home.html';
                }
                else if($page == 'page-1-1') {
                    include './page/page-1/page-1-1.html';
                }
                else if($page == 'page-1-2') {
                    include './page/page-1/page-1-2.html';
                }
                else if($page == 'page-1-3') {
                    include './page/page-1/page-1-3.html';
                }
                else if($page == 'page-1-4') {
                    include './page/page-1/page-1-4.html';
                }
                else if($page == 'page-2-1') {
                    include './page/page-2/page-2-1.html';
                }
                else if($page == 'page-2-2') {
                    include './page/page-2/page-2-2.html';
                }
                else if($page == 'page-2-3') {
                    include './page/page-2/page-2-3.html';
                }
                else if($page == 'page-2-4') {
                    include './page/page-2/page-2-4.html';
                }
                else if($page == 'page-3') {
                    include './page/page-3/page-3.html';
                }
                else if($page == 'menu-page-3') {
                    include './page/page-3/menu-page-3.html';
                }
                else if($page == 'page-4') {
                    include './page/page-4/page-4.html';
                }
                else if($page == 'contact') {
                    include './page/page-4/contact.html';
                }
                else if($page == 'cart') {
                    include './page/card/cart.html';
                }
                else if($page == 'add-cart') {
                    include './page/card/add-cart.html';
                }
                else if($page == 'btn-1-home') {
                    include './page/btn-home/btn-1-home.html';
                }
                else if($page == 'btn-2-home') {
                    include './page/btn-home/btn-2-home.html';
                }
                else if($page == 'btn-3-home') {
                    include './page/btn-home/btn-3-home.html';
                }
            }
        ?>
    </div>
</div>
<?php 
    include 'page/footer.html';
?>
