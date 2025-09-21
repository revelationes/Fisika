<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Hack Day Part I &middot; 2 May 2014</title>

        <meta name="description" content="Our first Hack Day">
        <meta name="author" content="Jonathan Goode">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
        <?php
            $cwd = getcwd() . '/';
            require_once($cwd . 'includes/global/config.inc.php');
        ?>

        <link rel="stylesheet" href="<?php echo CSS_PATH ?>reveal.css">
        <link rel="stylesheet" href="<?php echo CSS_PATH ?>bootstrap.css">
        <link rel="stylesheet" href="<?php echo THEME_CSS_PATH ?>default.css" id="theme">

        <!-- For syntax highlighting -->
        <link rel="stylesheet" href="<?php echo CSS_LIB_PATH ?>zenburn.css">

        <style>
            @font-face {
                font-family: 'Secca Std';
                src:  url('<?php echo FONT_LIB_PATH ?>secca_std.otf') format('opentype');
                font-weight: normal;
                font-style: normal;
            }

            body {
                background: #f6f6f6;
            }

            .reveal {
                color: #767676;
                font-family: 'Secca Std';
                font-size: 20px;
            }

            .reveal h1,
            .reveal h2,
            .reveal h3,
            .reveal h4,
            .reveal h5,
            .reveal h6 {
                color: inherit;
                font-family: inherit;
            }

            .reveal h1 {
                /*
                text-shadow: 0 1px 0 #cccccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbbbbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaaaaa, 0 6px 1px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.25), 0 20px 20px rgba(0, 0, 0, 0.15);
                */
                text-shadow: 0 1px 0 #cccccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbbbbb, 0 4px 0 #b9b9b9, 0 0px 0 #aaaaaa, 0 0px 1px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.25), 0 20px 20px rgba(0, 0, 0, 0.15);
            }

            .reveal li .grey-text {
                color: #767676;
            }

            .reveal li span, .reveal p {
                font-size: 30px;
                line-height: 1.3em;
            }

            .reveal li, .blue-text {
                color: #13daec !important;
            }

            ::selection {
                background: #13daec;
            }

            /**/

            .normal-mode, .print-pdf .print-mode, .print-pdf .slide-number, .slide-0 .slide-number {
                display: none;
            }

            .print-pdf .normal-mode {
                display: inline;
            }

            .hyperlink {
                font-size: 30px !important;
            }

            .justified-text {
                text-align: justify;
            }

            <?php
                if(date('Ymd') == date('Ymd', strtotime('2014-05-02'))){
            ?>
            .highlight {
                color: #13daec;
            }
            <?php
                }
            ?>
        </style>

        <!-- If the query includes 'print-pdf', include the PDF print sheet -->
        <script>
            if( window.location.search.match( /print-pdf/gi ) ) {
                var link = document.createElement( 'link' );
                link.rel = 'stylesheet';
                link.type = 'text/css';
                link.href = '<?php echo PRINT_CSS_PATH ?>pdf.css';
                document.getElementsByTagName( 'head' )[0].appendChild( link );
            }
        </script>

        <!--[if lt IE 9]>
        <script src="<?php echo SCRIPTS_LIB_PATH ?>html5shiv.js"></script>
        <![endif]-->
    </head>
    <body>
        <div class="reveal">

            <!-- Any section element inside of this container is displayed as a slide -->
            <div class="slides">
                <section>
                    <h1>Hack Day Part I</h1>
                    <h2>2 May 2014</h2>
                    <!--
                    <p>
                        <a class="normal-mode hyperlink" href="?#">(Normal Mode)</a>
                        <a class="print-mode hyperlink" href="?print-pdf#">(Print Mode)</a>
                    </p>
                    -->
                    <p><img src="<?php echo IMAGES_PATH ?>welcome.png"></p>
                </section>
                <section>
                    <ul>
                        <li><span class="blue-text">So, what is a hack day?</span>
                            <ul>
                                <li><span class="grey-text">Any number of developers split into teams</span></li>
                                <li><span class="grey-text">A subject, challenge (the broader the better) is set</span>
                                    <ul>
                                        <li><span class="grey-text">Developers are given a brief of the subject or challenge at the beginning of the day but it is up to them to interpret it</span></li>
                                    </ul>
                                </li>
                                <li><span class="grey-text">They code/design/engineer - over the course of a free form period - to create prototype solutions</span></li>
                                <li><span class="grey-text">They present back to their hack peers, any inquisitive viewers and the judge</span></li>
                                <li><span class="grey-text">A prize is awarded</span></li>
                                <li><span class="grey-text">Pizza is essential</span></li>
                            </ul>
                        </span></li>
                    </ul>
                </section>
                <section>
                    <ul>
                        <li><span class="blue-text">How will our hack day work?</span>
                            <ul>
                                <li><span class="grey-text">We will <em>evaluate</em> and <em>compare</em> current web tools to see whether they can improve the way we develop and the quality of code we produce</span></li>
                                <li><span class="grey-text">For allocation, mark on your sheet the 3 tools you are most interested in</span>
                                    <ul>
                                        <li><span class="grey-text">1 being your favourite</span></li>
                                    </ul>
                                </li>
                                <li><span class="grey-text">You will be split into teams of 3 or 4 people</span>
                                    <ul>
                                        <li><span class="grey-text">A team will have at least 2 members</span></li>
                                    </ul>
                                </li>
                                <li><span class="grey-text">Following the schedule on the next slide let your creativity begin!</span></li>
                                <br />
                                <p><span class="grey-text">(These slides are available online for reference)</span></p>
                            </ul>
                        </li>
                    </ul>
                </section>
                <!--
                <section>
                    <ul>
                        <li><span class="grey-text">SASS vs LESS</span></li>
                        <li><span class="grey-text">Foundation 5 vs Twitter Bootstrap vs Semantic UI</span></li>
                        <li><span class="grey-text">Sublime Text 3 vs Notepad++ vs PHPStorm vs Adobe Brackets vs GitHub’s Atom text editor
                            <ul><li><span class="grey-text">Sublime packages vs Notepad++ plugins</span></li></ul>
                        </span></li>
                        <li><span class="grey-text">Grunt vs Gulp</span></li>
                        <li><span class="grey-text">Bower vs Component</span></li>
                        <li><span class="grey-text">Yeoman vs Brunch vs Lineman.js</span></li>
                        <li><span class="grey-text">Heroku vs Nodejitsu vs AppFog</span></li>
                        <li><span class="grey-text">Angular.js vs Ember.js vs Backbone.js</span></li>
                        <li><span class="grey-text">Handlebars.js vs. Hogan.js vs. Mustache.js vs. jsRender vs Dust.js vs Underscore.js</span></li>
                        <li><span class="grey-text">Require.js vs Browserify vs Common.js</span></li>
                        <li><span class="grey-text">Dalek.js</span></li>
                        <li><span class="grey-text">Laravel 4 vs Symfony</span></li>
                        <li><span class="grey-text">jQuery vs Zepto vs MooTools</span></li>
                        <li><span class="grey-text">ShiftEdit vs  Cloud9 vs Koding vs Coda 2</span></li>
                        <li><span class="grey-text">CodePen vs JsFiddle vs JsBin vs CSS Deck</span></li>
                        <li><span class="grey-text">Dploy vs Snap CI vs Travis CI</span></li>
                    </ul>
                </section>
                -->
                <section>
                    <h2>Today's Schedule</h2>
                    <table class="table table-responsive">
                        <thead>
                            <tr>
                                <th>Task</th>
                                <th>Start Time</th>
                                <th>End Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php
                                date_default_timezone_set('Europe/London');
                                $now     = date_create('now');

                                $start   = date_create('now');
                                $start->setTime(10, 15);
                                $end     = date_create('now');
                                $end->setTime(10, 30);

                                $is_showing = '';
                                if($now >= $start && $now <= $end)
                                    $is_showing = 'highlight';

                                echo '
                                <tr class="' . $is_showing . '">
                                    <td>Welcome Presentation</td>
                                    <td>' . $start->format('H:i') . '</td>
                                    <td>' . $end->format('H:i') . '</td>
                                </tr>
                                ';
                            ?>
                            <?php
                                $start   = date_create('now');
                                $start->setTime(10, 35);
                                $end     = date_create('now');
                                $end->setTime(10, 45);

                                $is_showing = '';
                                if($now >= $start && $now <= $end)
                                    $is_showing = 'highlight';

                                echo '
                                <tr class="' . $is_showing . '">
                                    <td>Group Allocation</td>
                                    <td>' . $start->format('H:i') . '</td>
                                    <td>' . $end->format('H:i') . '</td>
                                </tr>
                                ';
                            ?>
                            <?php
                                $start   = date_create('now');
                                $start->setTime(10, 45);
                                $end     = date_create('now');
                                $end->setTime(11, 30);

                                $is_showing = '';
                                if($now >= $start && $now <= $end)
                                    $is_showing = 'highlight';

                                echo '
                                <tr class="' . $is_showing . '">
                                    <td>Begin Hack</td>
                                    <td>' . $start->format('H:i') . '</td>
                                    <td>' . $end->format('H:i') . '</td>
                                </tr>
                                ';
                            ?>
                            <?php
                                $start   = date_create('now');
                                $start->setTime(11, 30);
                                $end     = date_create('now');
                                $end->setTime(11, 40);

                                $is_showing = '';
                                if($now >= $start && $now <= $end)
                                    $is_showing = 'highlight';

                                echo '
                                <tr class="' . $is_showing . '">
                                    <td><em>Morning Break</em></td>
                                    <td>' . $start->format('H:i') . '</td>
                                    <td>' . $end->format('H:i') . '</td>
                                </tr>
                                ';
                            ?>
                            <?php
                                $start   = date_create('now');
                                $start->setTime(11, 40);
                                $end     = date_create('now');
                                $end->setTime(12, 30);

                                $is_showing = '';
                                if($now >= $start && $now <= $end)
                                    $is_showing = 'highlight';

                                echo '
                                <tr class="' . $is_showing . '">
                                    <td>Hack Continues</td>
                                    <td>' . $start->format('H:i') . '</td>
                                    <td>' . $end->format('H:i') . '</td>
                                </tr>
                                ';
                            ?>
                            <?php
                                $start   = date_create('now');
                                $start->setTime(12, 30);
                                $end     = date_create('now');
                                $end->setTime(13, 00);

                                $is_showing = '';
                                if($now >= $start && $now <= $end)
                                    $is_showing = 'highlight';

                                echo '
                                <tr class="' . $is_showing . '">
                                    <td><em>Lunch</em></td>
                                    <td>' . $start->format('H:i') . '</td>
                                    <td>' . $end->format('H:i') . '</td>
                                </tr>
                                ';
                            ?>
                            <?php
                                $start   = date_create('now');
                                $start->setTime(13, 00);
                                $end     = date_create('now');
                                $end->setTime(14, 00);

                                $is_showing = '';
                                if($now >= $start && $now <= $end)
                                    $is_showing = 'highlight';

                                echo '
                                <tr class="' . $is_showing . '">
                                    <td>Hack Continues</td>
                                    <td>' . $start->format('H:i') . '</td>
                                    <td>' . $end->format('H:i') . '</td>
                                </tr>
                                ';
                            ?>
                            <?php
                                $start   = date_create('now');
                                $start->setTime(14, 00);
                                $end     = date_create('now');
                                $end->setTime(14, 10);

                                $is_showing = '';
                                if($now >= $start && $now <= $end)
                                    $is_showing = 'highlight';

                                echo '
                                <tr class="' . $is_showing . '">
                                    <td>Team 1 Presentation</td>
                                    <td>' . $start->format('H:i') . '</td>
                                    <td>' . $end->format('H:i') . '</td>
                                </tr>
                                ';
                            ?>
                            <?php
                                $start   = date_create('now');
                                $start->setTime(14, 15);
                                $end     = date_create('now');
                                $end->setTime(14, 25);

                                $is_showing = '';
                                if($now >= $start && $now <= $end)
                                    $is_showing = 'highlight';

                                echo '
                                <tr class="' . $is_showing . '">
                                    <td>Team 2 Presentation</td>
                                    <td>' . $start->format('H:i') . '</td>
                                    <td>' . $end->format('H:i') . '</td>
                                </tr>
                                ';
                            ?>
                            <?php
                                $start   = date_create('now');
                                $start->setTime(14, 30);
                                $end     = date_create('now');
                                $end->setTime(14, 40);

                                $is_showing = '';
                                if($now >= $start && $now <= $end)
                                    $is_showing = 'highlight';

                                echo '
                                <tr class="' . $is_showing . '">
                                    <td>Team 3 Presentation</td>
                                    <td>' . $start->format('H:i') . '</td>
                                    <td>' . $end->format('H:i') . '</td>
                                </tr>
                                ';
                            ?>
                            <?php
                                $start   = date_create('now');
                                $start->setTime(14, 45);
                                $end     = date_create('now');
                                $end->setTime(14, 55);

                                $is_showing = '';
                                if($now >= $start && $now <= $end)
                                    $is_showing = 'highlight';

                                echo '
                                <tr class="' . $is_showing . '">
                                    <td>Team 4 Presentation</td>
                                    <td>' . $start->format('H:i') . '</td>
                                    <td>' . $end->format('H:i') . '</td>
                                </tr>
                                ';
                            ?>
                            <?php
                                $start   = date_create('now');
                                $start->setTime(15, 00);
                                $end     = date_create('now');
                                $end->setTime(15, 10);

                                $is_showing = '';
                                if($now >= $start && $now <= $end)
                                    $is_showing = 'highlight';

                                echo '
                                <tr class="' . $is_showing . '">
                                    <td>Team 5 Presentation</td>
                                    <td>' . $start->format('H:i') . '</td>
                                    <td>' . $end->format('H:i') . '</td>
                                </tr>
                                ';
                            ?>                            
                            <?php
                                $start   = date_create('now');
                                $start->setTime(15, 15);
                                $end     = date_create('now');
                                $end->setTime(15, 20);

                                $is_showing = '';
                                if($now >= $start && $now <= $end)
                                    $is_showing = 'highlight';

                                echo '
                                <tr class="' . $is_showing . '">
                                    <td>Prize Awarded</td>
                                    <td>' . $start->format('H:i') . '</td>
                                    <td>' . $end->format('H:i') . '</td>
                                </tr>
                                ';
                            ?>
                        </tbody>
                    </table>
                </section>
                <section>
                    <ul>
                        <li><span class="blue-text">Fire alarm</span>
                            <ul>
                                <li><span class="grey-text">No alarm is scheduled for today so if the alarm does go off please use the stairs to leave the building and gather outside the front of the Suttie Centre</span></li>
                            </ul>
                        </span></li>
                        <li><span class="blue-text">Toilets</span>
                            <ul>
                                <li><span class="grey-text">Toilets are available at either exit of this room simply follow the signs</span></li>
                            </ul>
                        </span></li>
                    </ul>
                </section>
                <section>
                    <ul>
                        <li><span class="blue-text">CSS Preprocessors</span></li>
                    </ul>
                    <p>
                        <a href="http://lesscss.org/" target="_blank"><img src="<?php echo LOGOS_IMAGES_PATH ?>less.png"></a>
                        <a href="http://sass-lang.com/" target="_blank"><img src="<?php echo LOGOS_IMAGES_PATH ?>sass.png"></a>
                    </p>
                </section>
                <section>
                    <ul>
                        <li><span class="blue-text">Front-end Frameworks</span></li>
                    </ul>
                    <p>
                        <a href="http://getbootstrap.com/" target="_blank"><img src="<?php echo LOGOS_IMAGES_PATH ?>twitter-bootstrap.png"></a>
                        <a href="http://foundation.zurb.com/" target="_blank"><img src="<?php echo LOGOS_IMAGES_PATH ?>foundation.png"></a>
                        <a href="http://semantic-ui.com/" target="_blank"><img src="<?php echo LOGOS_IMAGES_PATH ?>semantic-ui.png"></a>
                    </p>
                </section>
                <section>
                    <ul>
                        <li><span class="blue-text">Text Editors / IDEs</span>
                            <ul><li><span class="grey-text">(Including plugins)</span></li></ul>
                        </li>
                    </ul>
                    <p>
                        <a href="http://www.sublimetext.com/" target="_blank"><img src="<?php echo LOGOS_IMAGES_PATH ?>sublime-text.png"></a>
                        <a href="http://notepad-plus-plus.org/" target="_blank"><img src="<?php echo LOGOS_IMAGES_PATH ?>notepad++.png"></a>
                        <a href="http://www.jetbrains.com/phpstorm/" target="_blank"><img src="<?php echo LOGOS_IMAGES_PATH ?>phpstorm.png"></a>
                        <a href="http://brackets.io/" target="_blank"><img src="<?php echo LOGOS_IMAGES_PATH ?>brackets.png"></a>
                        <a href="https://atom.io/" target="_blank"><img src="<?php echo LOGOS_IMAGES_PATH ?>atom.png"></a>
                    </p>
                </section>
                <section>
                    <ul>
                        <li><span class="blue-text">JavaScript Task Runners</span></li>
                    </ul>
                    <p>
                        <a href="http://gruntjs.com/" target="_blank"><img src="<?php echo LOGOS_IMAGES_PATH ?>grunt.png"></a>
                        <a href="http://gulpjs.com/" target="_blank"><img src="<?php echo LOGOS_IMAGES_PATH ?>gulp.png"></a>
                    </p>
                </section>
                <section>
                    <ul>
                        <li><span class="blue-text">Package Managers</span></li>
                    </ul>
                    <p>
                        <a href="http://bower.io/" target="_blank"><img src="<?php echo LOGOS_IMAGES_PATH ?>bower.png"></a>
                        <a href="http://component.io/" target="_blank"><img src="<?php echo LOGOS_IMAGES_PATH ?>component.png"></a>
                    </p>
                </section>
                <section>
                    <ul>
                        <li><span class="blue-text">Scaffolding Tools</span></li>
                    </ul>
                    <p>
                        <a href="http://yeoman.io/" target="_blank"><img src="<?php echo LOGOS_IMAGES_PATH ?>yeoman.png"></a>
                        <a href="http://brunch.io/" target="_blank"><img src="<?php echo LOGOS_IMAGES_PATH ?>brunch.png"></a>
                        <a href="http://www.linemanjs.com/" target="_blank"><img src="<?php echo LOGOS_IMAGES_PATH ?>linemanjs.png"></a>
                    </p>
                </section>
                <section>
                    <ul>
                        <li><span class="blue-text">Cloud Hosting Platforms</span></li>
                    </ul>
                    <p>
                        <a href="https://www.heroku.com/" target="_blank"><img src="<?php echo LOGOS_IMAGES_PATH ?>heroku.png"></a>
                        <a href="https://www.nodejitsu.com/" target="_blank"><img src="<?php echo LOGOS_IMAGES_PATH ?>nodejitsu.png"></a>
                        <a href="https://www.appfog.com/" target="_blank"><img src="<?php echo LOGOS_IMAGES_PATH ?>appfog.png"></a>
                    </p>
                </section>
                <section>
                    <ul>
                        <li><span class="blue-text">JavaScript MVW Frameworks</span></li>
                    </ul>
                    <p>
                        <a href="http://emberjs.com/" target="_blank"><img src="<?php echo LOGOS_IMAGES_PATH ?>emberjs.png"></a>
                        <a href="https://angularjs.org/" target="_blank"><img src="<?php echo LOGOS_IMAGES_PATH ?>angularjs.png"></a>
                        <a href="http://backbonejs.org/" target="_blank"><img src="<?php echo LOGOS_IMAGES_PATH ?>backbonejs.png"></a>
                    </p>
                </section>
                <section>
                    <ul>
                        <li><span class="blue-text">JavaScript Templating Engines</span></li>
                    </ul>
                    <p>
                        <a href="http://handlebarsjs.com/" target="_blank"><img src="<?php echo LOGOS_IMAGES_PATH ?>handlebarsjs.png"></a>
                        <a href="http://twitter.github.io/hogan.js/" target="_blank"><img src="<?php echo LOGOS_IMAGES_PATH ?>hoganjs.png"></a>
                        <a href="http://mustache.github.io/" target="_blank"><img src="<?php echo LOGOS_IMAGES_PATH ?>mustachejs.png"></a>
                        <a href="http://www.jsviews.com/" target="_blank"><img src="<?php echo LOGOS_IMAGES_PATH ?>jsrender.png"></a>
                        <a href="http://akdubya.github.io/dustjs/" target="_blank"><img src="<?php echo LOGOS_IMAGES_PATH ?>dustjs.png"></a>
                        <a href="http://underscorejs.org/" target="_blank"><img src="<?php echo LOGOS_IMAGES_PATH ?>underscorejs.png"></a>
                    </p>
                </section>
                <section>
                    <ul>
                        <li><span class="blue-text">JavaScript File and Module Loaders</span></li>
                    </ul>
                    <p>
                        <a href="http://browserify.org/" target="_blank"><img src="<?php echo LOGOS_IMAGES_PATH ?>browserify.png"></a>
                        <a href="http://requirejs.org/" target="_blank"><img src="<?php echo LOGOS_IMAGES_PATH ?>requirejs.png"></a>
                        <a href="http://www.commonjs.org/" target="_blank"><img src="<?php echo LOGOS_IMAGES_PATH ?>commonjs.png"></a>
                    </p>
                </section>
                <!--
                <section>
                    <ul>
                        <li><span class="blue-text">Automated Testing</span></li>
                    </ul>
                    <p>
                        <a href="http://dalekjs.com/" target="_blank"><img src="<?php echo LOGOS_IMAGES_PATH ?>dalekjs.png"></a>
                    </p>
                </section>
                -->
                <section>
                    <ul>
                        <li><span class="blue-text">PHP Frameworks</span></li>
                    </ul>
                    <p>
                        <a href="http://laravel.com/" target="_blank"><img src="<?php echo LOGOS_IMAGES_PATH ?>laravel4.png"></a>
                        <a href="http://symfony.com/" target="_blank"><img src="<?php echo LOGOS_IMAGES_PATH ?>symfony.png"></a>
                    </p>
                </section>
                <section>
                    <ul>
                        <li><span class="blue-text">JavaScript Libraries</span></li>
                    </ul>
                    <p>
                        <a href="http://zeptojs.com/" target="_blank"><img src="<?php echo LOGOS_IMAGES_PATH ?>zepto.png"></a>
                        <a href="http://jquery.com/" target="_blank"><img src="<?php echo LOGOS_IMAGES_PATH ?>jquery.png"></a>
                        <a href="http://mootools.net/" target="_blank"><img src="<?php echo LOGOS_IMAGES_PATH ?>mootools.png"></a>
                    </p>
                </section>
                <section>
                    <ul>
                        <li><span class="blue-text">Cloud Editors/IDEs</span></li>
                    </ul>
                    <p>
                        <a href="https://koding.com/" target="_blank"><img src="<?php echo LOGOS_IMAGES_PATH ?>koding.png"></a>
                        <a href="https://shiftedit.net/" target="_blank"><img src="<?php echo LOGOS_IMAGES_PATH ?>shiftedit.png"></a>
                        <a href="https://c9.io/" target="_blank"><img src="<?php echo LOGOS_IMAGES_PATH ?>cloud9.png"></a>
                        <a href="https://panic.com/coda/" target="_blank"><img src="<?php echo LOGOS_IMAGES_PATH ?>coda.png"></a>
                    </p>
                </section>
                <section>
                    <ul>
                        <li><span class="blue-text">Code Playgrounds</span></li>
                    </ul>
                    <p>
                        <a href="http://jsbin.com/" target="_blank"><img src="<?php echo LOGOS_IMAGES_PATH ?>jsbin.png"></a>
                        <a href="http://codepen.io/" target="_blank"><img src="<?php echo LOGOS_IMAGES_PATH ?>codepen.png"></a>
                        <a href="http://jsfiddle.net/" target="_blank"><img src="<?php echo LOGOS_IMAGES_PATH ?>jsfiddle.png"></a>
                        <a href="http://cssdeck.com/" target="_blank"><img src="<?php echo LOGOS_IMAGES_PATH ?>cssdeck.png"></a>
                    </p>
                </section>
                <section>
                    <ul>
                        <li><span class="blue-text">Continuous Deployment Platforms</span></li>
                    </ul>
                    <p>
                        <a href="http://dploy.io/" target="_blank"><img src="<?php echo LOGOS_IMAGES_PATH ?>dploy.png"></a>
                        <a href="http://snap-ci.com/" target="_blank"><img src="<?php echo LOGOS_IMAGES_PATH ?>snapci.png"></a>
                        <a href="http://travis-ci.com/" target="_blank"><img src="<?php echo LOGOS_IMAGES_PATH ?>travisci.png"></a>
                    </p>
                </section>
                <section class="justified-text">
                    <ul>
                        <li><span class="blue-text">Continuous Integration</span></li>
                            <ul><li><a href="http://www.thoughtworks.com/continuous-integration" target="_blank">http://www.thoughtworks.com/continuous-integration</a></li></ul>
                        </li>
                    </ul>
                    <p>Continuous Integration (CI) is a development practice that requires developers to integrate code into a shared repository several times a day. Each check-in is then verified by an automated build, allowing teams to detect problems early.</p>
                    <p>By integrating regularly, you can detect errors quickly, and locate them more easily.</p>
                    <br />
                    <ul>
                        <li><span class="blue-text">The practices</span>
                            <ul>
                                <li><span class="grey-text">Maintain a single source repository</span></li>
                                <li><span class="grey-text">Automate the build</span></li>
                                <li><span class="grey-text">Make your build self-testing</span></li>
                                <li><span class="grey-text">Automate deployment</span></li>
                                <li><span class="grey-text">etc...</span></li>
                            </ul>
                        </li>
                    </ul>
                </section>
                <section class="justified-text">
                    <ul>
                        <li><span class="blue-text">An example of creating a prototype as part of a hack session is the use of reveal.js which powers these slides</span>
                            <ul>
                                <li><span class="grey-text">Created a template project with correct configuration</span>
                                    <ul><li><span class="grey-text">Can be re-used in future presentations</span></li></ul>
                                </li>
                                <li><span class="grey-text">Fed back 3 fixes (via a pull request) to the author of reveal.js</span></li>
                                <li><span class="grey-text">Repo synced to GitHub</span></li>
                                <li><span class="grey-text">Hosted in Heroku</span></li>
                                <li><span class="grey-text">Commits automatically refresh live version stored in Heroku using Snap CI</span></li>
                            </ul>
                        </li>
                    </ul>
                </section>
                <section class="justified-text">
                    <ul>
                        <li><span class="blue-text">Prize</span></li>
                    </ul>
                    <p>A prize will be awarded to the team who demonstrates the best comparison and the most influential sales pitch for using/paying for the tool.</p>
                </section>
                <section>
                    <h1 class="blue-text">Happy Coding! ☺</h1>
                </section>
                <section>
                    <ul>
                        <li><span class="blue-text">Teams</span>
                            <ul>
                                <li><span class="grey-text">Team 1 - PHP Frameworks</span>
                                    <ul><li><span class="grey-text">Scott</span></li></ul>
                                    <ul><li><span class="grey-text">Andrew F</span></li></ul>
                                </li>
                                <li><span class="grey-text">Team 2 - JavaScript Task Runners</span>
                                    <ul><li><span class="grey-text">Jonny</span></li></ul>
                                    <ul><li><span class="grey-text">Andrew M</span></li></ul>
                                </li>
                                <li><span class="grey-text">Team 3 - CSS Preprocessors</span>
                                    <ul><li><span class="grey-text">Tracy</span></li></ul>
                                    <ul><li><span class="grey-text">Kyle</span></li></ul>
                                </li>
                                <li><span class="grey-text">Team 4 - Continuous Deployment</span>
                                    <ul><li><span class="grey-text">Michael W</span></li></ul>
                                    <ul><li><span class="grey-text">Angela</span></li></ul>
                                </li>
                                <li><span class="grey-text">Team 5 - Text Editors - *Winners*</span>
                                    <ul><li><span class="grey-text">Michael D</span></li></ul>
                                    <ul><li><span class="grey-text">James</span></li></ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </section>
            </div>
        </div><!-- .reveal -->

        <script src="<?php echo SCRIPTS_LIB_PATH ?>head.min.js"></script>
        <script src="<?php echo SCRIPTS_PATH ?>reveal.js"></script>
        <script>
            // Full list of configuration options available here:
            // https://github.com/hakimel/reveal.js#configuration
            Reveal.initialize({
                history: true,
                loop: true,
                mouseWheel: true,
                slideNumber: true,

                theme: 'default', // available themes are in /css/theme
                transition: 'linear', // default/cube/page/concave/zoom/linear/fade/none

                // Parallax scrolling
                //parallaxBackgroundImage: 'https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg',
                //parallaxBackgroundSize: '2100px 900px',

                // Optional libraries used to extend on reveal.js
                dependencies: [
                    { src: '<?php echo SCRIPTS_LIB_PATH ?>classList.js', condition: function() { return !document.body.classList; } },
                    { src: '<?php echo MARKDOWN_PLUGINS_PATH ?>marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
                    { src: '<?php echo MARKDOWN_PLUGINS_PATH ?>markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
                    { src: '<?php echo HIGHLIGHT_PLUGINS_PATH ?>highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
                    { src: '<?php echo ZOOM_JS_PLUGINS_PATH ?>zoom.js', async: true, condition: function() { return !!document.body.classList; } },
                    { src: '<?php echo NOTES_PLUGINS_PATH ?>notes.js', async: true, condition: function() { return !!document.body.classList; } }
                ]
            });
        </script>
    </body>
</html>
