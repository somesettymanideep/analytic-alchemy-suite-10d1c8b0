import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#000A5C] to-[#000733] text-white pt-32 pb-16">
        <div className="container">
          <div className="text-xs font-semibold tracking-[0.28em] uppercase text-[#3B7EFF]">Legal</div>
          <h1 className="mt-3 font-heading font-bold text-4xl sm:text-5xl">Terms and Conditions</h1>
          <p className="mt-4 text-white/70 max-w-2xl">
            The terms that govern your use of Nextgenlytics&rsquo; services and website.
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="py-16">
        <div className="container max-w-3xl">
          <div className="space-y-10 text-slate-700 leading-relaxed">
            {/* Intro */}
            <div>
              <p>
                These Terms and Conditions (&ldquo;Terms&rdquo;) govern your use of the services provided by Nextgenlytics
                for data analytics and digital transformation. By accessing or using our services, you agree to be bound
                by these Terms.
              </p>

              <ul className="mt-6 space-y-4 list-disc pl-6">
                <li>
                  <span className="font-semibold text-slate-900">Service Description:</span> Nextgenlytics offers data
                  analytics and digital transformation services aimed at assisting businesses in leveraging data to drive
                  strategic decisions and enhance digital capabilities.
                </li>
                <li>
                  <span className="font-semibold text-slate-900">User Responsibilities:</span> You agree to use our
                  services in compliance with applicable laws and regulations. You are responsible for maintaining the
                  confidentiality of your account credentials and for any activity that occurs under your account.
                </li>
                <li>
                  <span className="font-semibold text-slate-900">Intellectual Property:</span> All content, materials,
                  and intellectual property provided as part of our services are owned by Nextgenlytics or its licensors.
                  You may not modify, reproduce, or distribute any content without prior written permission.
                </li>
                <li>
                  <span className="font-semibold text-slate-900">Data Privacy:</span> Our Privacy Policy governs the
                  collection, use, and disclosure of your personal information. By using our services, you consent to the
                  terms outlined in our Privacy Policy.
                </li>
                <li>
                  <span className="font-semibold text-slate-900">Limitation of Liability:</span> In no event shall
                  Nextgenlytics be liable for any direct, indirect, incidental, special, or consequential damages arising
                  out of or in connection with your use of our services.
                </li>
                <li>
                  <span className="font-semibold text-slate-900">Indemnification:</span> You agree to indemnify and hold
                  harmless Nextgenlytics, its affiliates, and their respective officers, directors, employees, and agents
                  from any claims, damages, or losses arising out of your use of our services.
                </li>
                <li>
                  <span className="font-semibold text-slate-900">Termination:</span> We reserve the right to suspend or
                  terminate your access to our services at any time, without prior notice, for any reason or no reason.
                </li>
                <li>
                  <span className="font-semibold text-slate-900">Governing Law:</span> These Terms shall be governed by
                  and construed in accordance with the laws of Netherlands, without regard to its conflict of law
                  provisions.
                </li>
                <li>
                  <span className="font-semibold text-slate-900">Changes to Terms:</span> Nextgenlytics reserves the
                  right to modify or update these Terms at any time. We will notify you of any material changes by
                  posting the updated Terms on our website or by other means of communication.
                </li>
                <li>
                  <span className="font-semibold text-slate-900">Contact Us:</span> If you have any questions or
                  concerns about these Terms, please contact us at{" "}
                  <a href="mailto:Info@nextgenlytics.com" className="text-[#0050D0] hover:underline">Info@nextgenlytics.com</a>.
                  By using our services, you acknowledge that you have read, understood, and agree to be bound by these
                  Terms and our Privacy Policy.
                </li>
              </ul>

              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6 space-y-1">
                <p className="font-semibold text-slate-900">Nextgenlytics — Amsterdam</p>
                <p>
                  <a href="mailto:Info@nextgenlytics.com" className="text-[#0050D0] hover:underline">Info@nextgenlytics.com</a>
                </p>
              </div>
            </div>

            {/* Limited license */}
            <div>
              <h2 className="font-heading font-bold text-2xl text-slate-900">Limited license</h2>
              <div className="mt-4 space-y-4">
                <p>
                  This website contains proprietary notices and copyright information, the terms of which must be
                  observed and followed. Subject to the terms and conditions set forth in these Terms of Use,
                  Nextgenlytics grants you a non-exclusive, non-transferable, limited copyright license to access, and
                  display this website and the materials thereon, provided you comply with these Terms of Use, and all
                  copyright, trademark, and other proprietary notices remain intact. You agree not to interrupt or attempt
                  to interrupt the operation of the website in any manner.
                </p>
                <p>
                  You shall not modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create
                  derivative works from, transfer, or sell any information, software, products, or services obtained from
                  this website. Except for the limited permission in the preceding paragraph, Nextgenlytics does not
                  grant you any express or implied rights or licenses under any patents, trademarks, copyrights, or other
                  proprietary or intellectual property rights. You may not mirror any of the content from this site on
                  another website or in any other media.
                </p>
                <p>
                  Any software and other materials that are made available for downloading, access, or other use from
                  this site with their own license terms will be governed by such terms, conditions, and notices. Your
                  failure to comply with such terms or any of the terms on this site will result in the automatic
                  termination of any rights granted to you, without prior notice, and you must immediately destroy all
                  copies of downloaded materials in your possession, custody, or control.
                </p>
              </div>
            </div>

            {/* Third-party content */}
            <div>
              <h2 className="font-heading font-bold text-2xl text-slate-900">Third-party content</h2>
              <div className="mt-4 space-y-4">
                <p>
                  The website makes information of third parties available, including articles, analyst reports, news
                  reports, tools to facilitate calculation, company information, and data about financial markets,
                  including any regulatory authority and other financial markets and other data from external sources
                  (the &ldquo;Third Party Content&rdquo;). You acknowledge and agree that the Third Party Content is not
                  created or endorsed by Nextgenlytics.
                </p>
                <p>
                  The website may provide links to websites and access to content, products, and services from third
                  parties, including users, advertisers, affiliates, and sponsors of the website (i.e., Third Party
                  Content). You agree that Nextgenlytics is not responsible for the availability of, and content provided
                  on, third-party websites. The User is requested to peruse the policies posted by other websites
                  regarding privacy and other topics before use. Any personal data processing by such third parties shall
                  be governed by their respective privacy policies. Nextgenlytics is not responsible for Third Party
                  Content accessible through the website, including opinions, advice, statements, and advertisements, and
                  User shall bear all risks associated with the use of such content including any intellectual property
                  infringement claim by third parties. Nextgenlytics is not responsible for any loss or damage of any sort
                  User may incur from dealing with any third party or Third Party Content.
                </p>
              </div>
            </div>

            {/* Blogs */}
            <div>
              <h2 className="font-heading font-bold text-2xl text-slate-900">Blogs</h2>
              <div className="mt-4 space-y-4">
                <p>
                  This is to inform and clarify that individuals (including but not limited to employees of
                  Nextgenlytics and referred to as &ldquo;Individuals&rdquo; hereafter) may contribute articles and
                  opinions on this website entirely at the sole discretion of Nextgenlytics, in the form of
                  &ldquo;blogs&rdquo;, as such term is generally understood. You hereby acknowledge and agree that these
                  blogs constitute the opinion of the Individuals in their personal capacity, and may not represent
                  official positions of Nextgenlytics in any manner. Nextgenlytics retains all copyright to these blogs
                  and grants the same license as mentioned under the section &ldquo;Limited License&rdquo; hereinabove.
                </p>
                <p>
                  You may be permitted to post comments and feedback to these blogs. By doing so, You expressly agree and
                  acknowledge to abide by the following:
                </p>
              </div>
              <ul className="mt-4 space-y-2.5 list-disc pl-6">
                <li>You shall not defame, disrepute, abuse, harass, or threaten Nextgenlytics or any third party, or otherwise violate the legal rights of Nextgenlytics or any third party.</li>
                <li>You shall not contribute any content or take any action that may in any manner adversely affect the reputation of Nextgenlytics, or that is otherwise detrimental to Nextgenlytics.</li>
                <li>You shall not in any manner publish or post any inappropriate, defamatory, infringing, obscene, racist, terrorist, politically slanted, indecent, or unlawful topic, name, material, or information.</li>
                <li>You shall not use profane and objectionable language or abbreviations. You shall not use any character(s) as a substitute for objectionable language.</li>
                <li>You shall not in any manner reveal confidential or proprietary information of any third party. Specifically, You shall not post any material for which You do not have requisite and applicable right(s) under law.</li>
                <li>You shall not conduct any contests or publish or propagate any forwards.</li>
                <li>You shall not defame, abuse, harass, stalk, threaten, or otherwise violate the legal rights (such as rights of privacy and publicity but not limited to the foregoing) of any other party including Nextgenlytics.</li>
                <li>You shall not publish, post, upload, distribute, or disseminate any inappropriate, profane, defamatory, obscene, indecent, or unlawful topic, name, material, or information.</li>
                <li>You shall not upload or otherwise make available, files that contain images, photographs, software, or other material protected by intellectual property laws, including, by way of example, and not as limitation, copyright or trademark laws (or by rights of privacy or publicity) unless You own or control the rights thereto or have received all necessary consent to do the same.</li>
                <li>You shall not upload files that contain viruses, trojan horses, worms, time bombs, cancelbots, corrupted files, or any other similar software or programs that may damage the operation of another&rsquo;s computer or property of another.</li>
                <li>You shall not advertise or offer to sell or buy any goods or services for any business purpose.</li>
                <li>You shall not download any file posted that You know, or reasonably should know, cannot be legally reproduced, displayed, performed, and/or distributed in such manner.</li>
                <li>You shall not falsify or delete any copyright management information, such as author attributions, legal or other proper notices or proprietary designations or labels of the origin or source of software or other material contained in a file that is uploaded.</li>
                <li>You shall not create a false identity for the purpose of misleading others.</li>
                <li>You shall not in any way deface or vandalize this website, or prevent or restrict others from using this website.</li>
                <li>You shall indemnify and hold harmless Nextgenlytics from any claims and loss incurred by Nextgenlytics as a result of Your violation of these Terms of Use.</li>
                <li>You acknowledge that Nextgenlytics may, at its sole discretion, monitor, remove or edit any content that You contribute. Nextgenlytics may also pursue remedies available to it under law for any violation of these terms and conditions.</li>
                <li>You shall ensure that any personal data of other individuals is shared by you only after seeking consent from the person(s) to whom the personal data belongs.</li>
              </ul>
            </div>

            {/* Disclaimer */}
            <div>
              <h2 className="font-heading font-bold text-2xl text-slate-900">Disclaimer</h2>
              <p className="mt-4">
                The website may contain inaccuracies and typographical and clerical errors. Nextgenlytics expressly
                disclaims any obligation(s) to update this website or any of the materials on this website. Nextgenlytics
                does not warrant the accuracy, adequacy, or completeness of the materials or the reliability of any
                advice, opinion, statement, or other information displayed or distributed through the website. You
                acknowledge that any reliance on any such opinion, advice, statement, memorandum, or information shall be
                at your sole risk. Nextgenlytics reserves the right, in its sole discretion, to correct any errors or
                omissions in any portion of the website. Nextgenlytics may make any other changes to the website, the
                materials and the products, programs, services, or prices (if any) described in the website at any time
                without notice. This website is for informational purposes only and should not be construed as technical
                advice of any manner. If any term in this Terms of Use is found by competent judicial authority to be
                unenforceable in any respect, the validity of the remainder of this Terms of Use will be unaffected,
                provided that such unenforceability does not materially affect the parties&rsquo; rights under this Terms
                of Use.
              </p>
            </div>

            {/* Confidential Information */}
            <div>
              <h2 className="font-heading font-bold text-2xl text-slate-900">Confidential Information</h2>
              <p className="mt-4">
                Nextgenlytics does not want to receive confidential or proprietary information from you through our
                website. Please note that any information or material sent to Nextgenlytics will be deemed NOT to be
                confidential. By sending Nextgenlytics any information or material, you grant Nextgenlytics an
                unrestricted, irrevocable license to copy, reproduce, publish, upload, post, transmit, distribute,
                publicly display, perform, modify, create derivative works from, and otherwise freely use, those materials
                or information. You also agree that Nextgenlytics is free to use any ideas, concepts, know-how, or
                techniques that you send us for any purpose. However, we will not release your name or otherwise
                publicize the fact that you submitted materials or other information to us unless: (a) we obtain your
                permission to use your name; or (b) we first notify you that the materials or other information you
                submit to a particular part of this site will be published or otherwise used with your name on it; or
                (c) we are required to do so by law. Personally-identifiable information that you submit to Nextgenlytics
                for the purpose of receiving products or services will be handled in accordance with our privacy
                policies. Please refer to the Nextgenlytics Privacy Statement for more information regarding our privacy
                practices.
              </p>
            </div>

            {/* No warranties */}
            <div>
              <h2 className="font-heading font-bold text-2xl text-slate-900">No warranties</h2>
              <p className="mt-4">
                This website, the information and materials on the site, and any software made available on the website,
                are provided &ldquo;as is&rdquo; without any representation or warranty, express or implied, of any kind,
                including, but not limited to, warranties of merchantability, non-infringement, or fitness for any
                particular purpose. There is no warranty of any kind, express or implied, regarding third-party content.
                In spite of Nextgenlytics&rsquo; best endeavors, there is no warranty on behalf of Nextgenlytics that this
                website will be free of any computer viruses. Nextgenlytics shall have no responsibility for any damage
                to the user&rsquo;s computer system or loss of data that results from the download of any content,
                materials, information from the website. Some jurisdictions do not allow for the exclusion of implied
                warranties, so the above exclusions may not apply to you. Nextgenlytics makes no warranty that: (a) the
                website will meet your requirements; (b) the website will be available on an uninterrupted, timely,
                secure, or error-free basis; (c) the results that may be obtained from the use of the website or any
                services offered through the website will be accurate or reliable.
              </p>
            </div>

            {/* Limitation of damages */}
            <div>
              <h2 className="font-heading font-bold text-2xl text-slate-900">Limitation of damages</h2>
              <p className="mt-4">
                To the fullest extent permitted by applicable law, in no event will Nextgenlytics be liable to any party
                for any direct, indirect, incidental, special, exemplary, or consequential damages of any type whatsoever
                related to or arising from this website or any use of this website, or of any site or resource linked to,
                referenced, or accessed through this website, or in the products any claim attributable to errors,
                omissions, or other inaccuracies in the product or interpretations thereof or for the use or downloading
                of, or access to, any materials, information, products, or services, including, without limitation, any
                lost profits, business interruption, lost savings, or loss of programs or other data, even if
                Nextgenlytics is expressly advised of the possibility of such damages. This exclusion and waiver of
                liability applies to all causes of action, whether based on contract, warranty, tort, or any other legal
                theories.
              </p>
            </div>

            {/* Lawful and/or prohibited use */}
            <div>
              <h2 className="font-heading font-bold text-2xl text-slate-900">Lawful and/or prohibited use of the website</h2>
              <p className="mt-4">
                As a condition of Your use of the Website, You shall not use the Website for any purpose(s) that is
                unlawful or prohibited by the Terms of Use. You shall not use the Website in any manner that could
                damage, disable, overburden, or impair any Nextgenlytics server, or the network(s) connected to any
                Nextgenlytics server, or interfere with any other party&rsquo;s use and enjoyment of any services
                associated with the Website. You shall not attempt to gain unauthorized access to any section of the
                Website, other accounts, computer systems, or networks connected to any Nextgenlytics server or to any
                of the services associated with the Website, through hacking, password mining, or any other means. You
                shall not obtain or attempt to obtain any Materials or information through any means not intentionally
                made available through the Website.
              </p>
            </div>

            {/* International users and choice of law */}
            <div>
              <h2 className="font-heading font-bold text-2xl text-slate-900">International users and choice of law</h2>
              <div className="mt-4 space-y-4">
                <p>
                  This Site is controlled, operated and administered by Nextgenlytics from its offices within the
                  Netherlands. Nextgenlytics makes no representation that Materials on this Website are appropriate or
                  available for use at any other location(s) outside the Netherlands. Any access to this Website from
                  territories where their contents are illegal is prohibited. You may not use the Website or export the
                  Materials in violation of any applicable export laws and regulations. If You access this Website from
                  a location outside the Netherlands, You are responsible for compliance with all local laws.
                </p>
                <p>
                  These Terms of Use shall be governed by the laws of the Netherlands, without giving effect to its
                  conflict of laws provisions. You agree that the appropriate court(s) in the Netherlands will have the
                  exclusive jurisdiction to resolve all disputes arising under these Terms of Use and You hereby consent
                  to personal jurisdiction in such forum.
                </p>
                <p>
                  These Terms of Use constitute the entire agreement between Nextgenlytics and You with respect to Your
                  use of the Website. Any claim You may have with respect to Your use of the Website must be commenced
                  within one (1) year of the cause of action. If any provision(s) of this Terms of Use is held by a court
                  of competent jurisdiction to be contrary to law then such provision(s) shall be severed from this Terms
                  of Use and the other remaining provisions of this Terms of Use shall remain in full force and effect.
                </p>
              </div>
            </div>

            {/* Changes */}
            <div>
              <h2 className="font-heading font-bold text-2xl text-slate-900">Changes</h2>
              <p className="mt-4">
                Nextgenlytics reserves the rights, at its sole discretion, to change, modify, add or remove any portion
                of these Terms of Use in whole or in part, at any time. Changes in these Terms of Use will be effective
                immediately when notice of such change is posted. Your continued use of the Website after any changes to
                these Terms of Use are posted will be considered acceptance of those changes. Nextgenlytics may
                terminate, change, suspend or discontinue any aspect of the Website, including the availability of any
                feature(s) of the Website, at any time. Nextgenlytics may also impose limits on certain features and
                services or restrict Your access to certain sections or all of the Website without notice or liability.
                You hereby acknowledge and agree that Nextgenlytics may terminate the authorization, rights and license
                given above at any point of time at its own sole discretion and upon such termination, You shall
                immediately destroy all Materials.
              </p>
            </div>

            {/* Indemnity */}
            <div>
              <h2 className="font-heading font-bold text-2xl text-slate-900">Indemnity</h2>
              <p className="mt-4">
                You agree to indemnify and hold harmless Nextgenlytics, its subsidiaries, and affiliates from any claim,
                cost, expense, judgment, or other loss relating to Your use, or misuse of the content and services
                provided through this Website in any manner, including without limitation of the foregoing, any action
                You take which is in violation of the terms and conditions of these Terms of Use and against any
                applicable law. This provision shall survive any termination of User access by Nextgenlytics at any
                point in time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default TermsAndConditions;
