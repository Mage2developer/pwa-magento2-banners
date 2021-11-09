<h2><b>Banners Add-on for Magento 2 PWA Studio</b></h2>

<p><b>Banners Add-on</b> is a very useful tool for marketing your business. You can showcase an attractive banner slider on any page of the Magento 2 PWA Studio storefront using this add-on. To make this add-on work, you should install the <a href="https://github.com/Mage2developer/magento2-banners-graphql" target="_blank">Mage2 Banners extension</a> on your Magento 2 instance.</p>

<h3><b>Pre-requirements</b></h3>
<ul>
<li>Magento 2.3.* or 2.4.*</li>
<li><a href="https://github.com/Mage2developer/magento2-banners-graphql" target="_blank">Mage2 Banners extension</a> should be installed in Magento 2 instance</li>
</ul>

<h3><b>Installation Instruction</b></h3>
<ol>
<li>Copy <b>@mage2</b> directory files and folders inside the <b>src</b> directory, for example:<br/> <pre>{pwa-root-dir}/packages/{custom-package}/@mage2</pre></li>
<li>Add the Banners add-on dependency in the <b>package.json</b> file of your custom package or venia-concept:</li>
<pre>
"dependencies": {    
    "@mage2": "link:src/@mage2",
    "banners": "link:src/@mage2/banners"
},
</pre>
<li>Run the following command inside your package or venia-concept directory:
<pre>yarn install</pre>
</li>
</ol>

<h3><b>Usage</b></h3>
For demonstration purpose we would take following examples to get an idea of how to add Banners add-on in all pages and in specific page.<br/><br/>
<ul>
<li><b>Banners Add-on on All pages</b><br/><br/>
We would add the <b>Banners Add-on</b> after the <b>Main Component</b> of the Venia storefront. For that, we need to add the following sample code inside the <b>local-intercept.js</b> file of your custom package or venia-concept:<br/><br/>
<pre>
const MainComponenet = targetables.reactComponent(
    '@magento/venia-ui/lib/components/Main/main.js'
);

const Banners = MainComponenet.addImport(
    "Banners from '@mage2/banners'"
);

MainComponenet.insertAfterJSX('`<Header />`', \`<${Banners} />\`);
</pre>
</li>
<li><b>Banners Add-on on a Specific page</b><br/><br/>
We can import <b>Banners Add-on</b> on a custom page of PWA storefront like the following sample code. Please refer <a href="https://www.mage2developer.com/create-a-custom-page-with-static-route-magento2-pwa/" target="_blank">Create a custom page with static route in Magento 2 PWA</a> a blog to create a custom page in the Magento 2 PWA Storefront.<br/><br/>
<pre>
import React from "react";
import Banners from "@mage2/banners/src/components/Banners";

const DemoPage = () => {
  const h1 = {
    textAlign: "center",
    margin: "1rem"
  }

  return (
    `<div>`
      `<h1 style={h1}>`This is my custom page`</h1>`
      `<Banners />`
    `</div>`
  );
}

export default DemoPage;
</pre>
</li>
</ul>

<p>In case of any other queries regarding this add-on:<br />
Contact us at <b>mage2developer@gmail.com</b>. We would be really happy to help :)</p>

<h3><b>Screen Shot</b></h3>

<img src="https://user-images.githubusercontent.com/26230770/140887056-adf07d6f-400c-4d5d-ad3e-681809417ec0.png" alt="banners-add-on-on-pwa-storefront" />
<p align="center"><b><i>Banners Add-on on a custom page of Magento 2 PWA Storefront</i></b></p>
