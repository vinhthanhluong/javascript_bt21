<?php

/**
 * Template name: Home Page
 * @author : Hy Hý
 */
get_header();
while (have_posts()) :
    the_post();
?>
    <main class="main">
        <?php
        $baners = get_field('mona_home_banner');
        if (is_array($baners) && count($baners) > 0) {


        ?>
            <div class="banners landing" id="home">
                <div class="banner-wrapper swiper-ben">
                    <div class="swiper">
                        <div class="swiper-wrapper">
                            <?php
                            foreach ($baners as $baner) {
                                $tar='href="javascript:;"';
                                if($baner['link']!=''){
                                    $tar='target="_blank" href="'. $baner['link'].'"';
                                }
                            ?>
                                <div class="swiper-slide">
                                    <a <?php echo $tar; ?> class="banners-wrap" style="background-image:none">
                                        <?php echo wp_get_attachment_image($baner['image'], 'full'); ?>
                                    </a>
                                </div>
                            <?php
                            }
                            ?>


                        </div>

                        <div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div>
                        <div class="swiper-pagination"></div>
                    </div>
                </div>
            </div>
        <?php } ?>



        <section class="about landing" id="about">
            <div class="container">
                <div class="about-wrapper">
                    <div class="head">
                        <h3 class="title tt-40 wow animate__jackInTheBox">
                            <?php the_field('title_about_page') ?>
                        </h3>
                        <p class="label tt-20" data-aos="fade-up">
                            Nền tảng đầu tiên ứng dụng
                            <a href="#popup-recommerce" class=" span popup-btn">Recommerce
                                <!-- <span class="img-vt">
                                    <img src="<?php echo site_url('template') ?>/img/img-v-2.png" alt="img-v-2.png" data-aos="fade-down" data-aos-delay="800">
                                </span> -->
                            </a>
                            tại Việt Nam, được phát triển bởi
                            <a href="https://tiki.vn/apps/vn.tiki.doridori" class="logo-tiki" data-aos="zoom-in-left" data-aos-delay="600">
                                <img src="<?php echo site_url('template') ?>/img/logo-tiki.svg" alt="logo-tiki.svg">
                            </a>
                        </p>
                        <div class="desc tt-16" data-aos="fade-up" data-aos-delay="300">
                            <?php the_field('subtitle_about_page')  ?>
                        </div>
                    </div>


                    <div class="about-slide swiper-custom">
                        <!--  -->
                        <div class="swiper dynamic">
                            <div class="swiper-wrapper">
                                <?php $itemsAbout = get_field('items_about_page');
                                $delay = 100;
                                if (is_array($itemsAbout)) {
                                    foreach ($itemsAbout as $k => $value) {
                                        $delay += 100;
                                ?>
                                        <div class="swiper-slide" data-aos="flip-left" data-aos-delay="<?php echo $delay ?>">
                                            <div class="about-inner">
                                                <a href="<?php echo $value['url'] ?>" class="img">
                                                    <?php echo wp_get_attachment_image($value['image'], '370x250') ?>
                                                </a>
                                                <div class="content">
                                                    <div class="about-desc">
                                                        <?php echo $value['title'] ?>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                <?php
                                    }
                                }
                                ?>
                            </div>
                            <div class="swiper-pagination"></div>
                        </div>
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div>
                    </div>
                    <div class="wrap-button">

                        <a href="#home" class="m-scroll-to btn-today t-uppercase f-bold wow animate__rollIn" style="visibility: visible; animation-name: rollIn;">
                            TRẢI NGHIỆM NGAY
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <div class="endow " >
            <div class="container-asd">

                <div class="endow-one">
                    <div class="endow-wap">
                        <div class="container">
                            <div class="endow-wrapper">
                                <div class="head">
                                    <h3 class="title tt-40 wow animate__lightSpeedInLeft">
                                        <?php the_field('title_intro_sec_page') ?>
                                    </h3>
                                    <a href="#home" class="m-scroll-to btn-today t-uppercase f-bold wow animate__rollIn ">
                                        TRẢI NGHIỆM NGAY
                                    </a>
                                </div>
                                <div class="endow-inner">
                                    <div class="columns">
                                        <?php $columns = get_field('items_intro_sec_page');
                                        if (is_array($columns)) {
                                            $delay = 200;
                                            foreach ($columns as  $k => $value) {
                                                $delay += 100;
                                        ?>
                                                <div class="column" data-aos="fade-left" data-aos-delay="<?php echo $delay ?>">
                                                    <div class="endow-box">
                                                        <div class="endow-icon">
                                                            <?php echo wp_get_attachment_image($value['icon'], 'thumbnail') ?>
                                                        </div>
                                                        <div class="content">
                                                            <p class="endow-tt f-bold tt-24 t-uppercase">
                                                                <?php echo $value['title'] ?>
                                                            </p>
                                                            <div class="desc tt-16">
                                                                <?php echo $value['description'] ?>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                        <?php
                                            }
                                        }
                                        ?>
                                    </div>
                                </div>
                            </div>
                            <div class="img wow animate__flipInX">
                                <?php echo wp_get_attachment_image(get_field('image_right_decor_intro_sec'), '900x615') ?>
                            </div>
                        </div>
                    </div>
                    <div class="bg-endow-w">
                        <img src="<?php echo site_url('template') ?>/img/bg-endow-w.png" alt="bg-endow-w.png">
                    </div>
                </div>
                <div class="endow-three landing" id="endows">
                        <div class="container">
                            <div class="endow-wrapper">
                                <div class="columns">
                                    <div class="column ig" data-aos="fade-up" data-aos-offset="200">
                                        <div class="img">
                                            <?php echo wp_get_attachment_image(get_field('image_right_decor_endow'), '400x999') ?>
                                        </div>
                                    </div>

                                    <div class="column txt">
                                        <div class="endow-inner">
                                            <div class="endow-row">
                                                <?php $timeline = get_field('time_line_intro_sec');
                                                if (is_array($timeline)) {
                                                    $delay = 200;
                                                    foreach ($timeline as $k => $value) {
                                                        $delay += 200;
                                                ?>
                                                        <div class="endow-box" data-aos="fade-left" data-aos-delay="<?php echo $delay ?>">
                                                            <p class="endow-month tt-12 f-bold t-uppercase" data-aos="fade-down" data-aos-delay="500">
                                                                <?php echo $value['time'] ?>
                                                            </p>
                                                            <p class="endow-text tt-16">
                                                                <?php echo $value['content'] ?>
                                                            </p>
                                                        </div>
                                                <?php
                                                    }
                                                }
                                                ?>
                                                <div class="endow-line"></div>
                                            </div>

                                            <div class="endow-foo">
                                                <div class="cols">
                                                    <div class="col">
                                                        <div class="ednow-iner">
                                                            <a href="#home" class="m-scroll-to  btn-today t-uppercase f-bold wow animate__rollIn">
                                                                TRẢI NGHIỆM NGAY
                                                            </a>
                                                            <p class="endow-p wow animate__bounceInLeft">
                                                                <?php the_field('note_sec_endow') ?>
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div class="col">
                                                        <div class="endow-time count-down" data-end-time="<?php the_field('time_end_countdown') ?>">
                                                            <div class="endow-bx" data-aos="flip-left">
                                                                <div class="bx-tm">
                                                                    <div class="day tx-tm"> </div>
                                                                    <p class="endow-t">
                                                                        ngày
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="endow-bx" data-aos="flip-left" data-aos-delay="400">
                                                                <div class="bx-tm">
                                                                    <div class="hours tx-tm"></div>
                                                                    <p class="endow-t">
                                                                        giờ
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="endow-bx" data-aos="flip-left" data-aos-delay="600">
                                                                <div class="bx-tm">
                                                                    <div class="minutes tx-tm"></div>
                                                                    <p class="endow-t">
                                                                        phút
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="endow-bx" data-aos="flip-left" data-aos-delay="800">
                                                                <div class="bx-tm">
                                                                    <div class="seconds tx-tm"></div>
                                                                    <p class="endow-t">
                                                                        giây
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="bg-endow-w-2">
                            <img src="<?php echo site_url('template') ?>/img/bg-endow-w.png" alt="bg-endow-w.png">
                        </div>
                    </div> 
                <div class="endow-two " >
                    <div class="container">
                        <div class="endow-wrapper">
                            <div class="columns">

                                <div class="column slide">
                                    <div class="swiper-endow">
                                        <div class="swiper">
                                            <div class="swiper-wrapper">
                                                <?php $columns = get_field('endow_item_intro_sec_page');
                                                if (is_array($columns)) {
                                                    foreach ($columns as $k => $value) {
                                                ?>
                                                        <div class="swiper-slide">
                                                            <div class="endow-slide" data-aos="fade-right" data-aos-delay="200">
                                                                <div class="endow-icon">
                                                                    <?php echo wp_get_attachment_image($value['icon'], 'thumbnail'); ?>
                                                                </div>
                                                                <p class="endow-tt tt-20 f-semi t-uppercase">
                                                                    <?php echo $value['title']; ?>
                                                                </p>
                                                            </div>
                                                        </div>
                                                <?php
                                                    }
                                                }
                                                ?>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="column ig wow animate__flipInY">
                                    <div class="img img-w-100">
                                        <?php echo wp_get_attachment_image(get_field('image_middle_decor_intro_sec_page'), '400x999') ?>
                                    </div>
                                </div>
                                <div class="column txt" data-aos="fade-left" data-aos-delay="800">
                                    <div class="endow-txt">
                                        <h3 class="title tt-40 wow animate__lightSpeedInRight">
                                            <?php the_field('title_right_intro_sec_page'); ?>
                                        </h3>
                                        <a href="#home" class="m-scroll-to btn-today t-uppercase f-bold" data-aos="fade-left">
                                            TRẢI NGHIỆM NGAY
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bg-endow-g">
                        <img src="<?php echo site_url('template') ?>/img/bg-endow-g.png" alt="bg-endow-g.png">
                    </div>
                </div>
                

            </div>
        </div>

        <div class="question landing" id="support">
            <div class="container">
                <div class="question-wrapper">
                    <h3 class="title tt-46 t-center wow animate__bounceIn">
                        <?php the_field('title_aq_sec') ?>
                    </h3>
                    <div class="question-main">
                        <?php $question = get_field('items_q_&_a_sec');
                        if (is_array($question)) {
                            foreach ($question as $k => $value) {
                        ?>

                                <div class="ques-item" data-aos="fade-up">
                                    <p class="ques-tt tt-16 f-bold t-uppercase">
                                        <?php echo $value['question'] ?>
                                        <img src="<?php echo site_url('template') ?>/img/svg/icon-down.svg" alt="icon-down.svg">
                                    </p>
                                    <div class="ques-content">
                                        <div class="mona-content tt-16">
                                            <?php echo $value['ans'] ?>
                                        </div>
                                    </div>
                                </div>
                        <?php
                            }
                        }
                        ?>
                    </div>
                </div>
            </div>
        </div>

    </main>
<?php
endwhile;
get_footer();
?>
<div id="popup-recommerce" class="mfp-hide white-popup-block block-signup">
    <div class="wrap-content main-content">
        <?php the_field('dinh_nghia_recommerce') ?>
    </div>
</div>