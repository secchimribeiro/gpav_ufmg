---
layout: default
title: Notícias
lang_root: pt
lang_tag: pt-BR
lang_switch: /en/news/
lang_switch_label: EN
---

# Notícias

{% assign posts = site.pages | where_exp: "p", "p.path contains 'pt/news/'" | where_exp: "p", "p.name != 'index.md'" | sort: "date" | reverse %}

{% if posts.size == 0 %}
<p>Em breve.</p>
{% endif %}

<ul class="news-list">
{% for p in posts %}
  <li class="news-item">
    <h2 class="news-item-title">
      <a href="{{ site.baseurl }}{{ p.url }}">{{ p.title }}</a>
    </h2>
    {% if p.date %}
      <p class="news-item-meta">
        <time datetime="{{ p.date | date_to_xmlschema }}">{{ p.date | date: "%Y-%m-%d" }}</time>
      </p>
    {% endif %}
    {% if p.cover %}
      <a href="{{ site.baseurl }}{{ p.url }}">
        <img class="news-thumb" src="{{ site.baseurl }}{{ p.cover }}" alt="">
      </a>
    {% endif %}
  </li>
{% endfor %}
</ul>
