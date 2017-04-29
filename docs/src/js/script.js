! function() {
    var articles = document.querySelectorAll('article');
    //渲染规则
    var renderer = new marked.Renderer();

    function escape(html, encode) {
        return html.replace(!encode ? /&(?!#?\w+;)/g : /&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    }
    renderer.heading = function(text, level) {
        return '<h' + level + '>' + text + '</h' + level + '>';
    }
    renderer.code = function(code, language) {
        return '<pre><code class="' + language + '">' + escape(code, true) + '</code></pre>'
    };
    //加载文章
    [].some.call(articles, function(el, i) {
        var file = el.getAttribute('data-file');
        if (file) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'md/' + file, true);
            xhr.send();
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        el.innerHTML = marked(xhr.responseText, {
                            renderer: renderer
                        });
                        el.querySelectorAll('pre code').forEach(function(el, i) {
                            hljs.highlightBlock(el);
                        });
                    } else if (xhr.status == 404) {
                        el.innerHTML = '<p style="color:red;">没有找到文件</p>'
                    }
                    completeAll();
                }
            }
        }
    });
    //加载结束
    var count = 0;

    function completeAll() {
        count++;
        if (count == articles.length) {
            var nav = document.querySelector('nav');
            var lists = nav.querySelectorAll('nav a');
            var sections = document.querySelectorAll('.main section');
            var id, ids;
            [].some.call(sections, function(el, i) {});

            function setPage(id) {
                document.body.scrollTop = 0;
         
                [].some.call(lists, function(el, i) {
                    el.classList.remove('on')
                });
                [].some.call(sections, function(el, i) {
                    el.classList.remove('on')
                });
                var list = nav.querySelector('#'+id);
                var section=document.querySelector('section[data-for="'+id+'"');

                if(list && section){
                    console.log(section);
                    list.classList.add('on');
                    section.classList.add('on');
                }
                
          
            }
            //导航点击事件
            nav.addEventListener('click', function(e) {
                var el = e.target;
                if (el.tagName == "A" && el.id) {
                    window.location.hash = el.id;
                    setPage(el.id);
                }
            });
            //hash
            function readHash() {
                var hash = window.location.hash;
                if (hash) {
                    id = hash.replace('#', '');
                    setPage(id);
                }else{
                    setPage('home');
                }
            }
            readHash();
            //hash change
            // window.onhashchange = function() {
            //     readHash();
            // }
        }
    }
}();