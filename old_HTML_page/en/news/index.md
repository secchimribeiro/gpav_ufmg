---
layout: default
title: News
lang_root: en
lang_tag: en
lang_switch: /pt/news/
lang_switch_label: PT
permalink: /en/news/
---

# News

{% assign posts = site.pages
  | where_exp: "p", "p.path contains 'en/news/'"
  | where_exp: "p", "p.name != 'index.md'"
  | sort: "date"
  | reverse
%}

{% if posts.size == 0 %}
<p>Coming soon.</p>
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
      {% assign cover = p.cover | strip %}
      {% assign first = cover | slice: 0, 1 %}
      {% if first != "/" %}
        {% assign cover = "/" | append: cover %}
      {% endif %}
      {% if cover contains site.baseurl %}{% assign cover = cover | replace_first: site.baseurl, "" %}{% endif %}
      <a href="{{ site.baseurl }}{{ p.url }}">
        <img class="news-thumb" src="{{ site.baseurl }}{{ cover }}" alt="">
      </a>
    {% endif %}
  </li>
{% endfor %}
</ul>
