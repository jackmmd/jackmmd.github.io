---
title: Rejex
description: Aprender rejex
---

### Carater <code>.</code>

Podemos usar el <code>.</code> cuantas veces sea necesario. El rejex 
remplazará el <code>.</code> con cualquier caracter tantas veces como aparezca.

<table>
  <thead>
    <tr>
      <th>Rejex</th>
      <th>Palabra</th>
      <th>Descripción</th>
    </tr>
  </thead>
	<tbody>
		<tr>
		  <td><code>a..m</code></td>
		  <td>Hay c<code>aram</code>ba</td>
		  <td>EL <code>..</code> representa los caracteres <code>ra</code></td>
		</tr>
        <tr>
		  <td><code>H.y</code></td>
		  <td><code>Hay</code> caramba</td>
		  <td>EL <code>.</code> representa el caracter <code>a</code></td>
		</tr>
        <tr>
		  <td><code>H.........a</code></td>
		  <td><code>Hay caramba</code></td>
		  <td>EL <code>.........</code> representa los caracteres <code>ay caramb</code></td>
		</tr>
	</tbody>
</table>