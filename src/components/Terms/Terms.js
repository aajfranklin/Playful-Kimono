import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Terms () {
  
  useEffect(() => {
    document.title = 'Playful Kimono - Terms and Conditions'
  }, [])
  
  return(
    <main>
      <section id="terms">
        <h1>TERMS AND CONDITIONS</h1>
        <p>Please read these terms and conditions carefully before using this site.</p>
        <h2>What's in these terms?</h2>
        <p>These terms tell you the rules for using our website <Link to={'/'}>www.playfulkimono.com</Link> (our site).</p>
        <p>Click on the links below to go straight to more information on each area:</p>
        <ul>
          <li><a href="#who-we-are">Who we are and how to contact us.</a></li>
          <li><a href="#accept-terms">By using our site you accept these terms.</a></li>
          <li><a href="#other-terms">There are other terms that may apply to you.</a></li>
          <li><a href="#terms-changes">We may make changes to these terms.</a></li>
          <li><a href="#site-changes">We may make changes to our site.</a></li>
          <li><a href="#suspend">We may suspend or withdraw our site.</a></li>
          <li><a href="#transfer">We may transfer this agreement to someone else.</a></li>
          <li><a href="#account-details">You must keep your account details safe.</a></li>
          <li><a href="#material">How you may use material on our site.</a></li>
          <li><a href="#information">Do not rely on information on our site.</a></li>
          <li><a href="#external-links">We are not responsible for websites we link to.</a></li>
          <li><a href="#user-content">User-generated content is not approved by us.</a></li>
          <li><a href="#complain">How to complain about content uploaded by other users.</a></li>
          <li><a href="#loss-or-damage">Our responsibility for loss or damage suffered by you.</a></li>
          <li><a href="#personal-information">How we may use your personal information.</a></li>
          <li><a href="#uploading">Uploading content to our site.</a></li>
          <li><a href="#rights">Rights you are giving us to use material you upload.</a></li>
          <li><a href="#viruses">We are not responsible for viruses and you must not introduce them.</a></li>
          <li><a href="#rules">Rules about linking to our site.</a></li>
          <li><a href="#country">Which country's laws apply to any disputes?</a></li>
        </ul>
        <h2 id="who-we-are">Who we are and how to contact us</h2>
        <p><Link to={'/'}>www.playfulkimono.com</Link> is a site operated by Euphemia Franklin ("We").</p>
        <p>To contact us, please email <a target="_blank" href="mailto:hello@playfulkimono.com">hello@playfulkimono.com</a></p>
        <h2 id="accept-terms">By using our site you accept these terms</h2>
        <p>By using our site, you confirm that you accept these terms of use and that you agree to comply with them.</p>
        <p>If you do not agree to these terms, you must not use our site.</p>
        <p>We recommend that you print a copy of these terms for future reference.</p>
        <h2 id="other-terms">There are other terms that may apply to you</h2>
        <p>These terms of use refer to the following additional terms, which also apply to your use of our site:</p>
        <ul>
          <li><Link to={'/privacy-policy'}>Our Privacy Policy</Link>. See further under How we may use your personal information.</li>
          <li>Our Acceptable Use Policy (see below) which sets out the permitted uses and prohibited uses of our site. When using our site, you must comply with this Acceptable Use Policy.</li>
          <li><Link to={'/privacy-policy'}>Our Cookie Policy</Link>, which sets out information about the cookies on our site.</li>
        </ul>
        <h2 id="terms-changes">We may make changes to these terms</h2>
        <p>We amend these terms from time to time. Every time you wish to use our site, please check these terms to ensure you understand the terms that apply at that time. These terms were most recently updated on 8th August 2020.</p>
        <h2 id="site-changes">We may make changes to our site</h2>
        <p>We may update and change our site from time to time.</p>
        <h2 id="suspend">We may suspend or withdraw our site</h2>
        <p>Our site is made available free of charge.</p>
        <p>We do not guarantee that our site, or any content on it, will always be available or be uninterrupted. We may suspend or withdraw or restrict the availability of all or any part of our site for business and operational reasons. We will try to give you reasonable notice of any suspension or withdrawal.</p>
        <p>You are also responsible for ensuring that all persons who access our site through your internet connection are aware of these terms of use and other applicable terms and conditions, and that they comply with them.</p>
        <h2 id="transfer">We may transfer this agreement to someone else</h2>
        <p>We may transfer our rights and obligations under these terms to another organisation. We will always tell you in writing if this happens and we will ensure that the transfer will not affect your rights under the contract.</p>
        <h2 id="account-details">You must keep your account details safe</h2>
        <p>If you choose, or you are provided with, a user identification code, password or any other piece of information as part of our security procedures, you must treat such information as confidential. You must not disclose it to any third party.</p>
        <p>We have the right to disable any user identification code or password, whether chosen by you or allocated by us, at any time, if in our reasonable opinion you have failed to comply with any of the provisions of these terms of use.</p>
        <p>If you know or suspect that anyone other than you knows your user identification code or password, you must promptly notify us at <a target="_blank" href="mailto:hello@playfulkimono.com">hello@playfulkimono.com</a>.</p>
        <h2 id="material">How you may use material on our site</h2>
        <p>We are the owner or the licensee of all intellectual property rights in our site, and in the material published on it.  Those works are protected by copyright laws and treaties around the world. All such rights are reserved.</p>
        <p>You may print off one copy, and may download extracts, of any page(s) from our site for your personal use and you may draw the attention of others within your organisation to content posted on our site.</p>
        <p>You must not modify the paper or digital copies of any materials you have printed off or downloaded in any way, and you must not use any illustrations, photographs, video or audio sequences or any graphics separately from any accompanying text.</p>
        <p>Our status (and that of any identified contributors) as the authors of content on our site must always be acknowledged.</p>
        <p>You must not use any part of the content on our site for commercial purposes without obtaining a licence to do so from us or our licensors.</p>
        <p>If you print off, copy or download any part of our site in breach of these terms of use, your right to use our site will cease immediately and you must, at our option, return or destroy any copies of the materials you have made.</p>
        <h2 id="information">Do not rely on information on this site</h2>
        <p>The content on our site is provided for general information only. It is not intended to amount to advice on which you should rely. You must obtain professional or specialist advice before taking, or refraining from, any action on the basis of the content on our site.</p>
        <p>Although we make reasonable efforts to update the information on our site, we make no representations, warranties or guarantees, whether express or implied, that the content on our site is accurate, complete or up to date.</p>
        <h2 id="external-links">We are not responsible for websites we link to</h2>
        <p>Where our site contains links to other sites and resources provided by third parties, these links are provided for your information only. Such links should not be interpreted as approval by us of those linked websites or information you may obtain from them.</p>
        <p>We have no control over the contents of those sites or resources.</p>
        <h2 id="user-content">User-generated content is not approved by us</h2>
        <p>This website may include information and materials uploaded by other users of the site, including to bulletin boards and chat rooms. This information and these materials have not been verified or approved by us. The views expressed by other users on our site do not represent our views or values.</p>
        <h2 id="complain">How to complain about content uploaded by other users</h2>
        <p>If you wish to complain about content uploaded by other users, please contact us on <a target="_blank" href="mailto:hello@playfulkimono.com">hello@playfulkimono.com</a>.</p>
        <h2 id="loss-or-damage">Our responsibility for loss or damage suffered by you</h2>
        <p>Whether you are a consumer or a business user:</p>
        <ul>
          <li>We do not exclude or limit in any way our liability to you where it would be unlawful to do so. This includes liability for death or personal injury caused by our negligence or the negligence of our employees, agents or subcontractors and for fraud or fraudulent misrepresentation.</li>
        </ul>
        <p>If you are a business user:</p>
        <ul>
          <li>We exclude all implied conditions, warranties, representations or other terms that may apply to our site or any content on it.</li>
          <li>
            We will not be liable to you for any loss or damage, whether in contract, tort (including negligence), breach of statutory duty, or otherwise, even if foreseeable, arising under or in connection with:
            <ul>
              <li>use of, or inability to use, our site; or</li>
              <li>use of or reliance on any content displayed on our site.</li>
            </ul>
          </li>
          <li>
            In particular, we will not be liable for:
            <ul>
              <li>loss of profits, sales, business, or revenue;</li>
              <li>business interruption;</li>
              <li>loss of anticipated savings;</li>
              <li>loss of business opportunity, goodwill or reputation; or</li>
              <li>any indirect or consequential loss or damage.</li>
            </ul>
          </li>
        </ul>
        <p>If you are a consumer user:</p>
        <ul>
          <li>Please note that we only provide our site for domestic and private use. You agree not to use our site for any commercial or business purposes, and we have no liability to you for any loss of profit, loss of business, business interruption, or loss of business opportunity.</li>
          <li>If defective digital content that we have supplied, damages a device or digital content belonging to you and this is caused by our failure to use reasonable care and skill, we will either repair the damage or pay you compensation.</li>
        </ul>
        <h2 id="personal-information">How we may use your personal information</h2>
        <p>We will only use your personal information as set out in our <Link to={'/privacy-policy'}>privacy policy</Link>.</p>
        <h2 id="uploading">Uploading content to our site</h2>
        <p>Whenever you make use of a feature that allows you to upload content to our site, or to make contact with other users of our site, you must comply with the content standards set out in our Acceptable Use Policy (see below).</p>
        <p>You warrant that any such contribution does comply with those standards, and you will be liable to us and indemnify us for any breach of that warranty. This means you will be responsible for any loss or damage we suffer as a result of your breach of warranty.</p>
        <p>Any content you upload to our site will be considered non-confidential and non-proprietary. You retain all of your ownership rights in your content, but you are required to grant us a limited licence to use, store and copy that content and to distribute and make it available to third parties.</p>
        <p>We also have the right to disclose your identity to any third party who is claiming that any content posted or uploaded by you to our site constitutes a violation of their intellectual property rights, or of their right to privacy.</p>
        <p>We have the right to remove any posting you make on our site if, in our opinion, your post does not comply with the content standards set out in our Acceptable Use Policy (see below)</p>
        <p>You are solely responsible for securing and backing up your content.</p>
        <p>We do not store terrorist content.</p>
        <h2 id="rights">Rights you are giving us to use material you upload</h2>
        <p>When you upload or post content to our site, you grant us the following rights to use that content:</p>
        <ul>
          <li>The right to share any site content to other platforms including, but not limited to, Instagram.</li>
        </ul>
        <h2 id="viruses">We are not responsible for viruses and you must not introduce them</h2>
        <p>We do not guarantee that our site will be secure or free from bugs or viruses.</p>
        <p>You are responsible for configuring your information technology, computer programmes and platform to access our site. You should use your own virus protection software.</p>
        <p>You must not misuse our site by knowingly introducing viruses, trojans, worms, logic bombs or other material that is malicious or technologically harmful. You must not attempt to gain unauthorised access to our site, the server on which our site is stored or any server, computer or database connected to our site. You must not attack our site via a denial-of-service attack or a distributed denial-of service attack. By breaching this provision, you would commit a criminal offence under the Computer Misuse Act 1990. We will report any such breach to the relevant law enforcement authorities and we will co-operate with those authorities by disclosing your identity to them. In the event of such a breach, your right to use our site will cease immediately.</p>
        <h2 id="rules">Rules about linking to our site</h2>
        <p>You may link to our home page, provided you do so in a way that is fair and legal and does not damage our reputation or take advantage of it.</p>
        <p>You must not establish a link in such a way as to suggest any form of association, approval or endorsement on our part where none exists.</p>
        <p>You must not establish a link to our site in any website that is not owned by you.</p>
        <p>Our site must not be framed on any other site, nor may you create a link to any part of our site other than the home page.</p>
        <p>We reserve the right to withdraw linking permission without notice.</p>
        <p>The website in which you are linking must comply in all respects with the content standards set out in our Acceptable Use Policy (see below)</p>
        <p>If you wish to link to or make any use of content on our site other than that set out above, please contact <a target="_blank" href="mailto:hello@playfulkimono.com">hello@playfulkimono.com</a>.</p>
        <h2 id="country">Which country's laws apply to any disputes?</h2>
        <p>If you are a consumer, please note that these terms of use, their subject matter and their formation, are governed by English law. You and we both agree that the courts of England and Wales will have exclusive jurisdiction except that if you are a resident of Northern Ireland you may also bring proceedings in Northern Ireland, and if you are resident of Scotland, you may also bring proceedings in Scotland.</p>
        <p>If you are a business, these terms of use, their subject matter and their formation (and any non-contractual disputes or claims) are governed by English law. We both agree to the exclusive jurisdiction of the courts of England and Wales.</p>
        
        <h1 id="acceptable-use">Playful Kimono Acceptable Use Policy</h1>
        PLEASE READ THE TERMS OF THIS POLICY CAREFULLY BEFORE USING THE SITE
        <h2>What's in these terms?</h2>
        <p>This acceptable use policy sets out the content standards that apply when you upload content to our site, make contact with other users on our site, link to our site, or interact with our site in any other way.</p>
        <h2>Who we are and how to contact us</h2>
        <p><Link to={'/'}>www.playfulkimono.com</Link> is a site operated by Euphemia Franklin ("We").</p>
        <p>To contact us, please email <a target="_blank" href="mailto:hello@playfulkimono.com">hello@playfulkimono.com</a></p>
        <h2>By using our site you accept these terms</h2>
        <p>By using our site, you confirm that you accept the terms of this policy and that you agree to comply with them.</p>
        <p>If you do not agree to these terms, you must not use our site.</p>
        <p>We recommend that you print a copy of these terms for future reference.</p>
        <h2>There are other terms that may apply to you</h2>
        <p>Our terms and conditions also apply to your use of our site.</p>
        <h2>We may make changes to the terms of this policy</h2>
        <p>We amend these terms from time to time. Every time you wish to use our site, please check these terms to ensure you understand the terms that apply at that time. These terms were most recently updated on 8th August 2020.</p>
        <h2>Prohibited uses</h2>
        <p>You may use our site only for lawful purposes. You may not use our site:</p>
        <ul>
          <li>In any way that breaches any applicable local, national or international law or regulation.</li>
          <li>In any way that is unlawful or fraudulent or has any unlawful or fraudulent purpose or effect.</li>
          <li>For the purpose of harming or attempting to harm minors in any way.</li>
          <li>To bully, insult, intimidate or humiliate any person.</li>
          <li>To send, knowingly receive, upload, download, use or re-use any material which does not comply with our content standards (see below).</li>
          <li>To transmit, or procure the sending of, any unsolicited or unauthorised advertising or promotional material or any other form of similar solicitation (spam).</li>
          <li>To knowingly transmit any data, send or upload any material that contains viruses, Trojan horses, worms, time-bombs, keystroke loggers, spyware, adware or any other harmful programs or similar computer code designed to adversely affect the operation of any computer software or hardware.</li>
        </ul>
        <p>You also agree:</p>
        <ul>
          <li>Not to reproduce, duplicate, copy or re-sell any part of our site in contravention of the provisions of our terms of website use.</li>
          <li>Not to access without authority, interfere with, damage or disrupt:
            <ul>
              <li>any part of our site;</li>
              <li>any equipment or network on which our site is stored;</li>
              <li>any software used in the provision of our site; or</li>
              <li>any equipment or network or software owned or used by any third party.</li>
            </ul>
          </li>
        </ul>
        <h2>Interactive services</h2>
        <p>We may from time to time provide interactive services on our site, including, without limitation:</p>
        <ul>
          <li>Chat rooms.</li>
          <li>Bulletin boards.</li>
        </ul>
        <p>Where we do provide any interactive service, we will provide clear information to you about the kind of service offered, if it is moderated and what form of moderation is used (including whether it is human or technical).</p>
        <p>We will do our best to assess any possible risks for users (and in particular, for children) from third parties when they use any interactive service provided on our site, and we will decide in each case whether it is appropriate to use moderation of the relevant service (including what kind of moderation to use) in the light of those risks. However, we are under no obligation to oversee, monitor or moderate any interactive service we provide on our site, and we expressly exclude our liability for any loss or damage arising from the use of any interactive service by a user in contravention of our content standards, whether the service is moderated or not.</p>
        <p>The use of any of our interactive services by a minor is subject to the consent of their parent or guardian. We advise parents who permit their children to use an interactive service that it is important that they communicate with their children about their safety online, as moderation is not fool proof. Minors who are using any interactive service should be made aware of the potential risks to them.</p>
        <p>Where we do moderate an interactive service, we will normally provide you with a means of contacting the moderator, should a concern or difficulty arise.</p>
        <h2>Content standards</h2>
        <p>These content standards apply to any and all material which you contribute to our site (Contribution), and to any interactive services associated with it.</p>
        <p>The Content Standards must be complied with in spirit as well as to the letter. The standards apply to each part of any Contribution as well as to its whole.</p>
        <p>Euphemia Franklin will determine, in her discretion, whether a Contribution breaches the Content Standards.</p>
        <p>A Contribution must:</p>
        <ul>
          <li>Be accurate (where it states facts).</li>
          <li>Be genuinely held (where it states opinions).</li>
          <li>Comply with the law applicable in England and Wales and in any country from which it is posted.</li>
        </ul>
        <p>A Contribution must not:</p>
        <ul>
          <li>Be defamatory of any person.</li>
          <li>Be obscene, offensive, hateful or inflammatory.</li>
          <li>Bully, insult, intimidate or humiliate.</li>
          <li>Promote sexually explicit material.</li>
          <li>Include child sexual abuse material.</li>
          <li>Promote violence.</li>
          <li>Promote discrimination based on race, sex, religion, nationality, disability, sexual orientation or age.</li>
          <li>Infringe any copyright, database right or trade mark of any other person.</li>
          <li>Be likely to deceive any person.</li>
          <li>Breach any legal duty owed to a third party, such as a contractual duty or a duty of confidence.</li>
          <li>Promote any illegal activity.</li>
          <li>Be in contempt of court.</li>
          <li>Be threatening, abuse or invade another's privacy, or cause annoyance, inconvenience or needless anxiety.</li>
          <li>Be likely to harass, upset, embarrass, alarm or annoy any other person.</li>
          <li>Impersonate any person, or misrepresent your identity or affiliation with any person.</li>
          <li>Give the impression that the Contribution emanates from Euphemia Franklin, if this is not the case.</li>
          <li>Advocate, promote, incite any party to commit, or assist any unlawful or criminal act such as (by way of example only) copyright infringement or computer misuse.</li>
          <li>Contain a statement which you know or believe, or have reasonable grounds for believing, that members of the public to whom the statement is, or is to be, published are likely to understand as a direct or indirect encouragement or other inducement to the commission, preparation or instigation of acts of terrorism.</li>
          <li>Contain any advertising or promote any services or web links to other sites.</li>
        </ul>
        <h2>Breach of this policy</h2>
        <p>When we consider that a breach of this acceptable use policy has occurred, we may take such action as we deem appropriate.</p>
        <p>Failure to comply with this acceptable use policy constitutes a material breach of the terms of use upon which you are permitted to use our site, and may result in our taking all or any of the following actions:</p>
        <ul>
          <li>Immediate, temporary or permanent withdrawal of your right to use our site.</li>
          <li>Immediate, temporary or permanent removal of any Contribution uploaded by you to our site.</li>
          <li>Issue of a warning to you.</li>
          <li>Legal proceedings against you for reimbursement of all costs on an indemnity basis (including, but not limited to, reasonable administrative and legal costs) resulting from the breach.</li>
          <li>Further legal action against you.</li>
          <li>Disclosure of such information to law enforcement authorities as we reasonably feel is necessary or as required by law.</li>
        </ul>
        <p>We exclude our liability for all action we may take in response to breaches of this acceptable use policy. The actions we may take are not limited to those described above, and we may take any other action we reasonably deem appropriate.</p>
        <h2>Which country's laws apply to any disputes?</h2>
        <p>If you are a consumer, please note that the terms of this policy, its subject matter and its formation are governed by English law. You and we both agree that the courts of England and Wales will have exclusive jurisdiction except that if you are a resident of Northern Ireland you may also bring proceedings in Northern Ireland, and if you are resident of Scotland, you may also bring proceedings in Scotland.</p>
        <p>If you are a business, the terms of this policy, its subject matter and its formation (and any non-contractual disputes or claims) are governed by English law. We both agree to the exclusive jurisdiction of the courts of England and Wales.</p>
      </section>
    </main>
  )
}

export default Terms;