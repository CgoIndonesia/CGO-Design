<template>
  <div>
    <Header />
    <div class="content-center">
    <b-row>
    <p style="font-weight:bold;font-size:30px;color:#233E98;float:left;margin: 80px 0 0 120px">Term Of Use</p>
    </b-row>
      <b-row align-h="center">
        <b-col md="2">
        <div class="sidebar-left">
            <div :class="{'active':selectedContent === 'Introduction'}" class="menu-sidebar-left" @click="selectedContent='Introduction'">
                <b-lin>Introduction</b-lin>
            </div>
            <div :class="{'active':selectedContent === 'Purchasing'}" class="menu-sidebar-left" @click="selectedContent='Purchasing'">
                <b-lin>Purchasing and Payments I</b-lin>
            </div>
            <div :class="{'active':selectedContent === 'Purchasing2'}" class="menu-sidebar-left" @click="selectedContent='Purchasing2'">
                <b-lin>Purchasing and Payments II</b-lin>
            </div>
            <div :class="{'active':selectedContent === 'Promo'}" class="menu-sidebar-left" @click="selectedContent='Promo'">
                <b-lin>Promo Code</b-lin>
            </div>
            <div :class="{'active':selectedContent === 'Obligations'}" class="menu-sidebar-left" @click="selectedContent='Obligations'">
                <b-lin>Your Obligations</b-lin>
            </div>
            <div :class="{'active':selectedContent === 'Property'}" class="menu-sidebar-left" @click="selectedContent='Property'">
                <b-lin>Intellectual Property</b-lin>
            </div>
            <div :class="{'active':selectedContent === 'Disclaimer'}" class="menu-sidebar-left" @click="selectedContent='Disclaimer'">
                <b-lin>Disclaimer</b-lin>
            </div>
            <div :class="{'active':selectedContent === 'Suspension'}" class="menu-sidebar-left" @click="selectedContent='Suspension'">
                <b-lin>Suspension and Terminations</b-lin>
            </div>
        </div>
        </b-col>
        <b-col md="6">
        <div class="content-privaci-policy">
        <ol v-if="selectedContent=='Introduction'" style="font-size:16px;">
            <li>Please read these terms of use (“Terms”) carefully before accessing and/or using the Platform and/or Service. These Terms govern your rights and obligations (whether as a guest or a registered user) regarding the access and/or use of cGO’s website, mobile application or any Internet service (including any associated software supplied by cGO) (collectively referred to as “Platform”) under cGO’s control or ownership. These Terms constitute a legally binding agreement between PT DTech Solusi Bisnis (including all its subsidiaries, related and/or associated companies) (these entities are collectively referred to as “cGO”, “we”, “us” or “our”), the proprietor of all rights in and to the Platform and/or Service, and you, the user of the Platform and/or Service.</li>
            <li>cGO is an online platform that provides access to book a variety of sea travel transportation including yacht rental and tour booking outlets (collectively referred to as “Boat” and the parties providing such Boat are referred to as “Merchant”) in their city (“Service”).</li>
            <li>cGO is a technology company that provides the Platform and/or Service but not the Activities. The Service enables cGO members to reserve and join Activities offered by the Merchant. It is up to the Merchant to offer their travel activities to cGO users and it is up to cGO members to accept such Activities.</li>
            <li>By accessing, browsing, downloading and/or using the Platform and/or Service, you acknowledge that you agree to comply with and be bound by these Terms, as amended from time to time. If you disagree with any part of these Terms, you must immediately discontinue your access and/or use of the Platform and/or Service.</li>
            <li>We may revise or update these Terms at any time by posting a revised/an updated version on the Platform. Unless stated otherwise, any revision or update takes effect immediately. Your continued access and/or use of the Platform and/or Service after a revision or update to these Terms constitutes your binding acceptance of the revised or updated Terms.</li>
            <li>We may change or update the Platform and/or Service and any information on the Platform and/or Service at any time without notice to you or liability to us. We may also suspend, discontinue, or restrict access to, the Platform and/or Service temporarily or permanently at any time without notice to you or liability to us.</li>
        </ol>
        <ol v-if="selectedContent=='Purchasing'" style="font-size:16px;">
            <li>You are able to purchase yacht or boat rental and tour package at the price displayed at each merchant page. When you purchase a travel activity, Organization (Midtrans) will process your payment, or hold the credit card number and charge the card for the activity at the time activity service is provided and (b) notify you of the purchase.</li>
            <li>Regardless there will be a confirmation from the 3rd party organization about the payment details information, Please do refer from cGO email notification for the DURATION of payment.</li>
            <li><strong>Payment Method:</strong> You must provide us with a current, valid and accepted payment method (as may be updated from time to time, "Payment Method") to use the Service. By using the Service, you agree to pay us the individual purchase price of Payment Method. This does not waive our right to seek payment directly from you through any other methods, should the Payment Method fail. We use third party payment service providers to facilitate your Payment Method. The terms of your payment will be based on your Payment Method and may be determined by agreement between you and your financial institution, credit/debit card issuer or other provider of your selected Payment Method. We disclaim all liabilities associated with the security of the Payment Method. You shall be responsible to resolve any disputes with your financial institution, credit/debit card issuer or other provider of your selected Payment Method.</li>
            <li><strong>No refunds:</strong> Purchases are not refundable and we will not refund or credit for any partially used or unused activities unless you provide credible evidence to us to prove that you have been wrongly billed or such other circumstances on a "case to case" basis as we may decide in our sole and absolute discretion.</li>
        </ol>
        <ol v-if="selectedContent=='Purchasing2'">
            <li><strong>Boat/Tour search:</strong> You may search for Boat or Merchants and view related information about activity types and times, Partners' locations and other related information such as amenities and other offerings. We may also feature an Activity as an advertisement on the Platform or on any other social media sites, but this is not a recommendation or endorsement of such Activity. We make no guarantees or representations on the quality or nature of the Merchants.</li>
            <li><strong>Online Booking:</strong> All Activities are updated on a weekly basis. You must book an Activity on the Platform in advance before you join the Activity. Some Activities are popular, so make sure you plan in advance. Upon visiting the Activity, you may be asked to show your "Order Code" for verification purposes. We make no guarantees or representations on the availability of Activities available for reservation as access to the Activities. You may reserve up to the total number of Eligible Activities based on merchant availability. Activities can be reserved one week in advance and will close daily at 12 am midnight, but some Merchants may have shorter reservation windows. We reserve the right to change, remove or add the Merchant without notice to you or liability to us.</li>
            <li><strong>Feedback:</strong> If you provide us with any comments, bug reports, feedback, or modifications proposed or suggested by you to the Platform and/or Service ("Feedback"), we have the right to use such Feedback in our sole and absolute discretion. You grant us an irrevocable, worldwide, non-exclusive, perpetual, royalty-free, sub-licensable and transferable license to incorporate and use your Feedback for any purposes.</li>
            <li><strong>Communications from cGO:</strong> By signing up with cGO, you agree to receive certain email and other communications in connection with the Platform and/or Service. For example, you might receive email blast, Activity reservation confirmations and cancellation confirmations. Communications relating to your Account will only be sent for important purposes, such as password recovery. You will also receive our e-mail newsletter from time to time. You can opt-out from receiving our e-mail newsletter by clicking the "Unsubscribe" link at the bottom of the e-mail.</li>
            <li><strong>Multiple accounts:</strong> Every member is only entitled to create one account per person. Any member who creates multiple accounts with single identity or multiple identities shall be in violation of these Terms and shall have his Account suspended/terminated and shall not be allowed to have access to the Platform and/or Service upon suspension/termination. We and/or our Partners reserve the right to review and investigate all allegations of fraudulent activities and to take any and all measures we and/or our Partner deem necessary to ensure a fair sign up scheme is implemented accordingly.</li>
            <li><strong>Additional terms:</strong> When using the Platform and/or Service, you will be subject to any additional guidelines or rules applicable to specific products, services or features which may be posted from time to time ("FAQs"). All such FAQs are hereby incorporated by reference into these Terms. In the event of any inconsistencies or discrepancies between these Terms and the FAQs, these Terms shall prevail. Should you have any questions, please send us an email to info@cgo.co.id.</li>
        </ol>
        <ol v-if="selectedContent=='Promo'">
            <li>Promo code is not transferable, exchangeable, convertible or redeemable for cash</li>
            <li>Promo code may not be combined or accumulated with other offers or promo codes</li>
            <li>Promo code may only be used pursuant to the specific terms that we establish for such promo code and you must enter the promo code into the "Promo Code" field prior to completing the order.</li>
            <li>We reserve the right to withhold, deduct or remove or other features or benefits obtained through the use of promo code by you or any other user in the event that we determine or believe that the use or redemption of the promo code was in error, fraudulent, illegal or in violation of the applicable promo code terms or these Terms.</li>
            <li>We reserve the right to change, suspend, cancel and/or waive the promo code and its applicable terms at any time and from time to time in our sole and absolute discretion without notice to you or liability to us.</li>
        </ol>
        <ol v-if="selectedContent=='Obligations'">
            <li>You are solely responsible for your own internet connection/telecommunication charges incurred for accessing and connecting to the Platform.</li>
            <li>You may access and view the Platform and may save an electronic copy or print out a copy of the materials from the Platform, solely for your own personal and non-commercial use. All copies that you make must be in the form as presented on the Platform and must include all applicable copyright and other notices on the Platform. You must not modify the paper or digital copies of any materials you have printed off or downloaded in any way, and you must not use any illustrations, photographs, video or audio sequences or any graphics separately from any accompanying text or for any commercial use.</li>
            <li>You must comply at all times with any instructions for use of the Platform and/or Service which we make from time to time.</li>
            <li>You must keep your username and/or login password secure and: not permit any other person to use your username and/or login password, including not disclosing or providing it to any other person; and (b)immediately notify us if you become aware of any unauthorized use or disclosure of your username and/or login password, by sending an email to <a href="mailto:info@cgo.co.id">info@cgo.co.id</a></li>
            <li>Prior to participating in any of the Activities provided by merchant, you should seek the advice of your doctor or other qualified healthcare professional if you have any concerns or questions about your health. By using the Service and/or joining the Activity, you acknowledge and agree that your participation in any of the Activities offered by our Merchant is entirely at your own risk and you shall have no recourse whatsoever against us and our Merchant.</li>
            <li>You must not: <br> 
            (a) act in a way, or use or introduce anything (including any virus, worm, Trojan horse, time bomb, keystroke logger, spyware or other similar feature) that may compromise, damage, detrimentally interfere with, surreptitiously intercept or expropriate any system, network, data or personal data stored on the Platform;
            (b) use the Platform in any manner that could damage, disable, overburden or impair any of our server, or the networks connected to our server, or interfere with any other party’s access and use of the Platform;
            (c) attempt to gain unauthorised access to the Platform, other cGO members’ Accounts, computer systems or networks connected to our server, through hacking, password mining or any other means or interfere or attempt to interfere with the proper working of the Platform or any activities conducted on the Platform;
            (d) obtain, or attempt to obtain, any information through any means not intentionally made available on or through the Platform;
            (e) remove, circumvent, disable, damage or otherwise interfere with security-related features of the Platform;
            (f) license, sub-license, sell, re-sell, transfer, assign, distribute or otherwise commercially exploit or make available to any third party the Platform in any way;
            (g) modify or create a derivative work based on the materials on the Platform, nor decompile, decipher, reverse-engineer or disassemble or otherwise attempt to derive any source code or underlying ideas or algorithms of any part of the Platform in order to build a competitive product or service; build a product using similar ideas, features, functions or graphics of the Platform; or copy any ideas, features, functions or graphics of the Platform;
            (h) link to, mirror or frame any portion of the Platform;
            (i) cause or launch any programs or scripts for the purpose of scraping, indexing, surveying, or otherwise data mining any portion of the Platform;
            (j) intentionally or unintentionally cause or attempt to cause physical or property damage or harm to any cGO users or Merchants; and/or
            </li>
            <li>You hereby agree to indemnify and hold us, our affiliates, and each of our and their respective directors, shareholders, employees, partners, agents, contractors, directors, suppliers, vendors and representatives harmless against all losses, damages, claims, liabilities, expenses or costs that arise from or in connection with:
            (a) your access and/or use of the Platform and/or Service; 
            (b) your breach of any of these Terms or any applicable law or regulation;
            (c) your dealing with the Merchant, including your breach of any terms set by the Merchants or the rights of any third party, including the Merchants;
            (d) any other party's access and/or use of the Platform and/or Service using your username and/or login password; and/or
            (e) any other party's breach of any of these Terms where such party was able to access and/or use the Platform and/or Service using your username and/or login password.
            </li>
            <li>Any rights relating to the use of the Platform and/or Service not expressly granted herein are reserved and no license or right is granted to you by implication, estoppel or otherwise</li>
        </ol>
        <ol v-if="selectedContent=='Property'">
          <li>We are the owner (or the licensee, where applicable) of all proprietary and intellectual property rights on the Platform (including all information, data, texts, graphics, visual interfaces, artworks, photographs, logos, icons, sound recordings, videos, look and feel, software programmes, computer code, downloadable files, software applications, interactive features, tools, services) or other information or content made available on or through the Platform.</li>
          <li>We grant you, subject to these Terms, a non-exclusive, non-transferable, non-assignable, personal, limited license to access and use the Platform and/or Service for your own personal and non-commercial use. This license is revocable at any time without notice to you or liability to us. All rights not expressly granted to you are reserved by us.</li>
          <li>The terms "cGO", and our logo are our trademarks, trade names and service marks. Without our prior written permission, and except as solely enabled by any link as provided by us, you agree not to display or use in any manner the marks "cGO".</li>
        </ol>
        <ol v-if="selectedContent=='Disclaimer'">
          <li>While we endeavour to ensure that the information and materials on the Platform and/or Service are correct, no representation, warranty or guarantee, express or implied, is given that they are complete, accurate, up-to-date, fit for a particular purpose and, to the extent permitted by law, we do not accept any liability for any errors or omissions. The information and materials on the Platform and/or the quality of the Service are provided to you for information purposes only and on an "as is" and "as available" basis without representations, warranties or guarantees of any kind either express or implied.</li>
          <li>Whilst we endeavour to make the Platform available 24 hours a day, we shall not be liable if for any reason the Platform is unavailable for any time or for any period. We make no representation, warranty or guarantee that your access to the Platform will be uninterrupted, timely or error-free. Due to the nature of the Internet, this cannot be guaranteed. In addition, we may occasionally need to carry out repairs, maintenance or introduce new facilities and functions.</li>
          <li>To the extent permitted by law, we and our licensors hereby disclaim all warranties, express or implied, statutory or otherwise, in respect of the Platform and/or Service and we and our licensors have no liability or responsibility to you or any other person (even if we have been advised as to the possibility) for any direct, indirect, economic, exemplary, incidental or consequential loss (including loss of profit and loss of data), damage, claim, liability, expense or cost, whether in contract, tort (including negligence), equity, breach of statutory duty or otherwise, arising out of or in connection with: 
          (a) the Platform and/or Service being unavailable (in whole or in part), interrupted or performing slowly;
          (b) any error in, or omission from, any information made available through the Platform and/or Service;
          (c) any other party's access and/or use of the Platform and/or Service using your username and/or login password;
          (d) any exposure to malicious software including but not limited to, viruses, computer worms, Trojan horses, spyware or other harmful forms of interference which may damage your computer system, mobile device, software, data or other property or expose you to fraud when you access or use the Platform and/or Service. To avoid doubt, you are responsible for ensuring the process by which you access and use the Platform and/or Service protects you from this; and/or
          (e) any site linked from the Platform and/or Service. Any link on the Platform and/or Service to other sites does not imply any endorsement, approval or recommendation of, or responsibility for, those sites or their contents, operations, products or operators.
          </li>
          <li>4.	We make no representation, warranty or guarantee: 
          (a) that the Platform and/or Service is appropriate or available for use in all countries or that the content satisfies the laws of all countries. You are responsible for ensuring that your access to and use of the Platform and/or Service is not illegal or prohibited, and for your own compliance with applicable local laws;
          (b) that the Platform and/or Service will be compatible with all hardware, software and operating system which you may use;
          (c) about the accuracy, reliability, suitability, completeness or timeliness of the Platform and/or Service or of any information from the Partners, such as class times, locations and descriptions; and/or
          (d) about the quality, suitability, safety or ability of the Partners’ services.
          </li>
          <li>We are not responsible nor liable for any direct, indirect, economic, exemplary, incidental or consequential loss (including loss of profit and loss of data), damage, cost or expense, whether in contract, tort (including negligence, injuries or other health or medical problems), that you may suffer or incur as a result of or in connection with the acts, omissions and/or negligence of any Partner who provides the Activities to you.</li>
        </ol>
        <div v-if="selectedContent=='Suspension'">
          <h5>Rules and Abuse</h5>
          <p>General Rules</p>
          <ol>
            <li>We reserve the right, in our absolute discretion, to monitor any and all access and use of the Platform and/or Service</li>
            <li>Without prejudice to any other right or remedy available to us, if we consider that you have breached any of these Terms or we otherwise consider it appropriate, we may immediately, and without notice to you or liability to us, suspend or terminate your Account and access to the Platform and/or Service (or any part of it) without compensation to you and we may block access from a particular Internet protocol address to the Platform and/or Service (or any part of it) in the event of any breach of these Terms. In addition, we reserve the right to seek all remedies available under these Terms, at law and in equity for breach of these Terms.</li>
            <li>On suspension or termination of your Account, you must immediately cease using the Platform and/or Service and must not attempt to gain further access.</li>
          </ol>

          <p>By agreeing to these Terms, you promise to follow these rules: 

              You understand and agree that, at any time and without prior notice cGO may (1) terminate, cancel, deactivate, disable, delete and/or suspend your subscription, your account, any orders placed, or your access to or use of the Site, your Trip (2) discontinue, disable, suspend, modify or alter any aspect, feature or policy of the Site , including of your subscription and memberships. This includes the right to terminate or modify any subscription prior to the end of any pre-paid or committed period. Upon any termination or otherwise, we may immediately deactivate your account and all related information and/or bar any further access to your account information and the Site. cGO shall have no liability for, and you shall have no recourse for, any such termination or deactivation, except as set forth in the following sentence. If you are subscriber, then upon any such termination by us without cause, as your sole recourse, we will issue you a pro rata refund of the prepaid portion of your subscription applicable to future unused services (less any fees or costs for classes or services already used). If we determine that you have violated these Terms or otherwise engaged in illegal or improper use of your Site, you will not be entitled to any refund and you agree that we will not be responsible to pay any such refund. Site under any other user name, email, payment method or profile cGO may block your access to the Site to prevent re-registration.
              1.	Act in a deceptive or fraudulent manner by, among other things, impersonating another person or access another user’s account or signing up for more than one account;
              2.	Permit anyone to use any services booked under your own account, 
              3.	Procedures, policies and behavior and usage rules made available to you by the Merchants.

              We also may suspend or terminate your account if we determine, in our sole discretion, that you are either:

              1.	a person that has publicly made a comment or statement, or otherwise publicly made known a position, including by membership in an organization as discussed above, that could be reasonably perceived as Hateful Content or A Threat of Physical Harm; or
              2.	a person or organization that has acted in such a way as could be reasonably perceived to support, condone, encourage, or represent Hateful Content or A Threat of Physical Harm.

              If you violate any of these rules, then we may suspend or terminate your account.
              </p>
        </div>
        </div>
      </b-col>
        <b-col md="3">
           <div class="sidebar-right">
        <p style="font-weight:bold;">Need Help?</p>
        <img src="@/assets/image 44.png">
         <b-button style="background-color:#233E98;width:100%;">Contact Us</b-button>
      </div>
        </b-col>
      </b-row>
      </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'

export default {
  name: 'home',
  components: {
    Footer,
    Header,
  },
    data () {
      return {
        selectedContent: 'Introduction',
      }
    }
}
</script>
<style>
.content-center{
width: 100%;
color: #ffffff;
}
.content-privaci-policy{
float: left;
color: #ffffff;
padding: 10px;
margin:50px 30px 10px 0;
color: black;
text-align: justify;
}
.sidebar-right{
color: black;
margin: 65px 50px 0 0;
border:#d4d9da solid 1px;
padding: 20px;
}
.sidebar-left{
color: black;
margin: 65px 0 0 50px;
}
.menu-sidebar-left{
background-color: #F1F1F1;
padding: 5px;
margin: 5px;
cursor: pointer;
}
.menu-sidebar-left:hover{
background-color: #D9F7FA;
padding: 5px;
margin: 5px;
}
.menu-sidebar-left.active{
background-color: #D9F7FA;
padding: 5px;
margin: 5px;
}
@media only screen and (max-width: 600px) {
.sidebar-right{
margin: 0 0 0 0;
  }
.sidebar-left{
margin: 0 0 0 0;
  }
}
</style>
