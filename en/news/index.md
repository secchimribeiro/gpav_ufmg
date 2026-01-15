---
layout: default
title: News
lang_root: en
lang_tag: en
lang_switch: /pt/news/
lang_switch_label: PT
---

# News

{% assign posts = site.pages | where_exp: "p", "p.path contains 'en/news/'" | where_exp: "p", "p.name != 'index.md'" | sort: "date" | reverse %}

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
      <a href="{{ site.baseurl }}{{ p.url }}">
        <img class="news-thumb" src="{{ site.baseurl }}{{ p.cover }}" alt="">
      </a>
    {% endif %}
  </li>
{% endfor %}
</ul>
