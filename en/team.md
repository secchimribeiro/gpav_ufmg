---
layout: default
title: Team
lang_root: en
lang_tag: en
lang_switch: /pt/team/
lang_switch_label: PT
---

{% assign role_order = "Group Leader|Project Manager|Postdocs|PhD students|Master Students|Undergrad students|Former members" | split: "|" %}
{% assign team = site.data.team.members | default: empty %}

{% for r in role_order %}
  {% assign members = team | where: "role", r | sort: "order" %}
  {% if members and members.size > 0 %}

## {{ r }}

<div class="cards">
{% for m in members %}
  <article class="card">
    {% if m.photo %}
      <img class="card-photo" src="{{ site.baseurl }}{{ m.photo }}" alt="Photo of {{ m.name }}">
    {% endif %}
    <div class="card-body">
      <h3 class="card-title">{{ m.name }}</h3>
      {% if m.title %}<p class="card-subtitle">{{ m.title }}</p>{% endif %}
      <p>{{ m.bio_en }}</p>
      {% if m.linkedin %}
        <p><a href="{{ m.linkedin }}" aria-label="LinkedIn of {{ m.name }}">LinkedIn</a></p>
      {% endif %}
    </div>
  </article>
{% endfor %}
</div>

  {% endif %}
{% endfor %}

{% if team == empty %}
<p>Coming soon.</p>
{% endif %}
