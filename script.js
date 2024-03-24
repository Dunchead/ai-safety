// CONTENT

const risks = {
    catastrophe: [
        {
            title: "Autonomous weapons",
            risks: `<p>Autonomous weapons are here now.  The first documented use was an autonomous weapons system programmed to target retreating forces in Libya in March 2021.  Besides the moral repugnance of enabling machines to take human lives, there are numerous risks:</p>
                <ul>
                <li><b>Unpredictable</b> by design (to evade defences)</li>
                <li>Speed of engagement can lead to rapid <b>escalation</b></li>
                <li>Low cost and portability will lead to significant <b>proliferation</b> and increase in risk from terrorism</li>
                <li>Can be programmed to target specific ethnic groups, potentially facilitating <b>genocide</b></li>
                </ul>
                <p>Autonomous weapons are particularly subject to the "arms race" dynamics and coordination problems that define the landscape of AI risk: unless everyone is prevented from developing autonomous weapons, everyone feels compelled to do so as quickly as possible, even if it will lead to potential disaster for everyone.</p>
                <h4>Links</h4>
                <p><a href="https://autonomousweapons.org/" target="_blank">AutonomousWeapons.org - Future of Life Institute project</a></p>`,
            solutions: `<p>The <a href="https://www.un.org/sg/en/content/sg/note-correspondents/2023-10-05/note-correspondents-joint-call-the-united-nations-secretary-general-and-the-president-of-the-international-committee-of-the-red-cross-for-states-establish-new" target="_blank">United Nations has called on world leaders</a> to negotiate a legally binding agreement restricting the use of autonomous weapons by 2026.  The <a href="https://en.wikipedia.org/wiki/Chemical_Weapons_Convention" target="_blank">Chemical Weapons Convention</a> and the <a href="https://en.wikipedia.org/wiki/Treaty_on_the_Non-Proliferation_of_Nuclear_Weapons" target="_blank">Treaty on the Non-Proliferation of Nuclear Weapons</a> are successful examples of similar international agreements.</p>
                <h4>Links</h4>
                <p><a href="https://automatedresearch.org/state-positions/?_state_position_negotiation=yes" target="_blank">State positions on negotiating the agreement</a></p>`,
        },
        {
            title: "Military strategy",
            risks: `<p>AI is already being used in the Ukraine war to analyse data on enemy movements and inform strategy.  AI in warfare can destabilise an already volatile situation:</p>
                <ul>
                <li>Creates "arms race" dynamics leading to <b>escalation</b></li>
                <li>Decision-making becomes more opaque leading to <b>miscalculation</b></li>
                <li>Catastrophic risk comes from broadening of conflict and involvement of <b>nuclear powers</b></li>
                </ul>
                <h4>Links</h4>
                <p><a href="https://unidir.org/wp-content/uploads/2023/10/UNIDIR_AI-international-security_understanding_risks_paving_the_path_for_confidence_building_measures.pdf" target="_blank"><b>AI and International Security</b> - United Nations Institute for Disarmament Research</a></p>
                <p><a href="https://cepa.org/article/ukraines-secret-weapon-artificial-intelligence/" target="_blank"><b>Ukraine's Secret Weapon - Artificial Intelligence</b> - Center for European Policy Analysis</a></p>`,
            solutions: `<p>The ICRC urges a <a href="https://international-review.icrc.org/articles/ai-and-machine-learning-in-armed-conflict-a-human-centred-approach-913" target="_blank">human-centered approach</a> to the development and use of AI in places affected by conflict:</p>
                <p><i>From our perspective, conversations around military uses of AI and machine learning, and any additional rules, regulations or limits that are developed, need to reflect and strengthen the existing obligations under international law, in particular international humanitarian law.</i></p>`,
        },
        {
            title: "Biotech / nanotech",
            risks: `<p><b>Current risk:</b> AI chatbots can lower the knowledge barrier in these high-risk fields such that anyone with a computer can learn how to build something of potentially devastating lethality:</p>
                <ul>
                <li>AI chatbots could provide "gain of function" formulae for dangerous new viruses that, combined with ever-cheaper DIY biotech equipment, significantly lowers the barrier for developing bioweapons and increases the risk of disastrous accidents</li>
                <li>AI could also accelerate nanotech research, opening up a whole new field of poorly understood risk</li>
                <li>The use of AI in gene editing presents similar concerns</li>
                </ul>
                <p><b>Future risk:</b> When AI systems can do all of the above without human intervention, the risk goes off the scale.</p>`,
            solutions: `<ul>
                <li>Prevent models from being trained on relevant data</li>
                <li>Robust guardrails in models to prevent output of dangerous formulae/information</li>
                <li>Monitor user interactions for suspicious prompts</li>
                <li>Stringent regulations preventing the general release, distribution or use of models with these capabilities</li>
                <li>Control/monitor access to physical lab equipment and materials</li>
                </ul>`,
        },
        {
            title: "Cyber weapons / malware",
            risks: `<p>According to a report by the UK National Cyber Security Center:</p>
                <ul>
                <li>All types of cyber threat actor – state and non-state, skilled and less skilled – are already using AI, to varying degrees</li>
                <li>AI will almost certainly increase the volume and heighten the impact of cyber attacks over the next two years</li>
                <li>The threat to 2025 comes from evolution and enhancement of existing tactics, techniques and procedures</li>
                <li>AI makes reconnaissance and social engineering more effective, efficient, and harder to detect</li>
                <li>AI lowers the barrier for novice cyber criminals, hackers-for-hire and hacktivists</li>
                </ul>
                <p>The catastrophic risk stems from the susceptibility of critical infrastructure and high-risk targets to cyber attacks.  This list of <a href="https://www.csis.org/programs/strategic-technologies-program/significant-cyber-incidents">major cyber attacks</a> to date shows the scale of the current problem.</p>
                <h4>Links</h4>
                <p><a href="https://www.ncsc.gov.uk/report/impact-of-ai-on-cyber-threat" target="_blank"><b>The near-term impact of AI on the cyber threat</b> - UK National Cyber Security Centre</a></p>`,
            solutions: `<ul>
                <li>Bolster cybersecurity defences around critical inffrastructure and high-risk targets</li>
                <li><a href="https://worldcoin.org/blog/engineering/humanness-in-the-age-of-ai" target="_blank"><b>Proof of personhood systems</b></a> are needed to create 'firewalls' against AI system infiltration</li>
                </ul>`,
        },
        {
            title: "Financial / economic crisis",
            risks: `<p>AI is already used extensively in finance.  As the industry becomes more dependent upon increasingly complex and inscrutable AI, the risks multiply.</p>
                <ul>
                <li>Trading bots causing repeated, unrecoverable "flash crashes"</li>
                <li>AI designing incomprehensible financial instruments that indirectly lead to financial crisis</li>
                <li>Use of AI in economic policy decisions that have misaligned or unexpected consequences</li>
                </ul>
                <h4>Links</h4>
                <p><a href="https://www.imf.org/en/Publications/fintech-notes/Issues/2023/08/18/Generative-Artificial-Intelligence-in-Finance-Risk-Considerations-537570" target="_blank"><b>Generative Artificial Intelligence in Finance: Risk Considerations</b> - International Monetary Fund</a></p>`,
            solutions: ``,
        },
    ],
    disruption: [
        {
            title: "Unemployment / inequality",
            risks: `<p>It is clear that AI will lead to job displacement, but there is little consensus on exactly how much.  A <a href="https://www.oxfordmartin.ox.ac.uk/downloads/academic/The_Future_of_Employment.pdf">seminal 2013 study</a> said that potentially half of all jobs in the US could be at risk, though did not even include creative professions that are already experiencing job loss due to AI.  More recent studies in the UK have estimated anything from 7% to 30%.</p>
                <p>Job dislacement caused by AI is more concerning than historical technological unemployment because of the probability of increasing net job losses.  There may be new jobs created in the short term, but as AI capabilities increase these may also quickly be lost.  This presents significant risk for the very foundations of global society.</p>
                <h4>Links</h4>
                <p><a href="https://assets.publishing.service.gov.uk/media/615d9a1ad3bf7f55fa92694a/impact-of-ai-on-jobs.pdf" target="_blank"><b>The Potential Impact of Artificial Intelligence on UK Employment and the Demand for Skills</b> - Report by PwC for the Department for Business, Energy and Industrial Strategy</a></p>`,
            solutions: `<ul>
                <li>New mechanisms for equitable resdistribution of the wealth created by automation - e.g. a global Universal Basic Income, such as <a href="https://worldcoin.org/" target="_blank">Open AI's Worldcoin</a></li>
                <li>A new vision for a global society that will no longer be structured around human economic activity</li>
                </ul>`,
        },
        {
            title: "Crime",
            risks: `<p>While the potential for large-scale catastrophic risk from AI being used in cyber attacks is real, it is already being employed to cause real harm for individuals and organisations:</p>
                <ul>
                <li><b>Scams</b> - Audio/visual deepfakes are used for impersonation in scams; LLMs can generate convincing scripts</li>
                <li><b>Deepfake pornography</b> - Deepfake pornography based upon real people can be created for profit/blackmail</li>
                <li><b>Information for criminal activity</b> - LLMs can assist in fraud, or provide information that can be used for criminal/terrorist activity (e.g. bomb-making recipes)</li>
                </ul>`,
            solutions: `<p>Despite existing legal penalties for engaging in these activities, further measures will be needed to counter the increased threat introduced by AI:</p>
                <ul>
                <li><b>Raise awareness</b> of growing AI capabilities and potential for use in scams</li>
                <li><b>Implement guardrails</b> to prevent output of scripts designed for manipulation / social engineering</li>
                <li><b>Monitor user interactions</b> for suspicious prompts</li>
                </ul>`,
        },
        {
            title: "Misinformation / political manipulation",
            risks: `<p>Recent years have already seen the notion of a shared, undisputed truth begin to crumble, as conspiracy theories and disinformation campaigns have proliferated.  Against this background, the advent of generative AI creates a perfect storm for misinformation and political maniuplation:</p>
                <ul>
                <li><b>Fake media</b> - Photos/videos of events that never happened, exact reproductions of public figures' own voices, convincing fake news reports</li>
                <li><b>Distrust of real news</b> - The proliferation of fake media will almost certainly lead to distrust of media in general, including what is real</li>
                <li><b>False constituencies</b> - AI systems can be used to contact elected representatives en masse, creating a 'false constituency' to lobby for policy change</li>
                <li><b>Targeted misinformation</b> - Robo-callers/-mailers can target voters directly with manipulative, personalised campaigns - even impersonating political candidates - to sway/suppress votes</li>
                <li><b>Low bar for interference</b> - AI can produce convincing arguments, flawlessly, in any language, lowering the bar for foreign interference</li>
                </ul>
                <h4>Links</h4>
                <p><a href="https://www.theguardian.com/us-news/2023/jul/19/ai-generated-disinformation-us-elections" target="_blank"><b>Disinformation reimagined: how AI could erode democracy in the 2024 US elections</b> - The Guardian</a></p>`,
            solutions: `<p><a href="https://www.aielectionsaccord.com/" target="_blank"><b>AI Elections Accord</b></a> is a voluntary framework signed by most leading AI companies to help combat deceptive AI election content.  It has seven principle goals:</p>
                <ul>
                <li><b>Prevention</b> - Researching, investing in, and/or deploying reasonable precautions to limit risks of deliberately deceptive AI election content being generated.</li>
                <li><b>Provenance</b> - Attaching provenance signals to identify the origin of content where appropriate and technically feasible.</li>
                <li><b>Detection</b> - Attempting to detect deceptive AI election content or authenticated content, including with methods such as reading provenance signals across platforms.</li>
                <li><b>Responsive protection</b> - Providing swift and proportionate responses to incidents involving the creation and dissemination of deceptive AI election content.</li>
                <li><b>Evaluation</b> - Undertaking collective efforts to evaluate and learn from the experiences and outcomes of dealing with Deceptive AI Election Content.</li>
                <li><b>Public awareness</b> - Engaging in shared efforts to educate the public about media literacy best practices, in particular regarding Deceptive AI Content, and ways citizens can protect themselves from being manipulated or deceived by this content.</li>
                <li><b>Resilience</b> - Supporting efforts to develop and make available defensive tools and resources, such as AI literacy and other public programs, AI-based solutions (including open-source tools where appropriate), or contextual features, to help protect public debate, defend the integrity of the democratic process, and build whole-of-society resilience against the use of deceptive AI election content.</li>
                </ul>`,
        },
        {
            title: "Bias",
            risks: `<p>AI systems are shaped by bias that already exists in the world but the dynamics of AI development and application mean that a small amount of input bias can lead to signficant bias in the output.</p>
                <p>Bias can enter development in several ways: the form of a skew in the training data, in the computation of the training process itself or through the input of a human programmer.</p>
                <p>There have already been numerous real-life examples of the impact of AI bias:</p>
                <ul>
                <li><b>Recruitment</b> - Amazon abandoned its AI recruitment tool in 2018 when it was found to favour male candidates</li>
                <li><b>Finance</b> - Studies have shown that AI loan approval systems may disproportionately deny loans to minority groups, even when controlling for other relevant factors</li>
                <li><b>Healthcare</b> - AI diagnostic systems have been found to be less effective in the diagnosis of ethnic minorities</li>
                <li><b>Criminal justice</b> - A risk assessment tool used in the United States was more likely to label black defendants as higher risk compared to white defendants, even when the actual reoffending rates were similar</li>
                </ul>`,
            solutions: `<ul>
                <li><a href="https://www.tensorflow.org/tfx/guide/fairness_indicators" target="_blank"><b>Fairness Indicators</b></a> (part of Google's Tensor Flow AI framework) can help ensure fairness in a dataset</li>
                </ul>`,
        },
        {
            title: "Government misuse",
            risks: `<p>If AI is misused by governments, intentionally or not, there is the potential for widespread harm to citizens.  There must be a clear understanding of potential risks and robust mitigating measures in place before AI systems are deployed at such a scale.</p>
                <ul>
                <li><b>Surveillance</b> - AI is already widely used in automated recognition systems (e.g. facial-recognition, car number-plate recognition), threatening individual privacy and potentially leading to excessive authoritarianism without proper regulation</li>
                <li><b>Predictive policing</b> - Using AI to predict crime trends can lead to over-policing of certain communities, confirmation bias and trend reinforcement</li>
                <li><b>Algorithmic discrimination</b> - Systemic discrimination due to algorithmic flaws/biases within bureaucratic apparatus can cause immense harm, as observed in the <a href="https://www.politico.eu/article/dutch-scandal-serves-as-a-warning-for-europe-over-risks-of-using-algorithms/" target="_blank">Dutch childcare benefits scandal</a>, which led the entire Dutch government to resign in January 2021</li>
                <li><b>Censorship</b> - Many authoritarian regimes are already incorporating AI into their censorship mechanisms, and requiring platforms to do so by law</li>
                </ul>`,
            solutions: `<p>The citizens of any nation are vulnerable to government misuse of AI, but possible solutions will vary from country to country.</p>
                <p><a href="https://www.amnesty.org/en/latest/campaigns/2024/01/the-urgent-but-difficult-task-of-regulating-artificial-intelligence" target="_blank">Amnesty International has emphasised</a> that the US, UK and EU should prohibit the export of AI systems to countries where they could be used to harm the human rights of marginalised groups.</p>`,
        },
    ],
    erosion: [
        {
            title: "Erosion of human relationships",
            risks: `<p>As AI becomes more ubiquitous and capable, interaction with AI will begin to replace interaction with our fellow human beings:</p>
                <ul>
                <li><b>Education</b> - Teachers being replaced by AI systems</li>
                <li><b>Love/friendship</b> - AI boyfriends/girlfriends/companions</li>
                <li><b>Healthcare/therapy</b> - Consultations with AI doctors/nurses/counsellors</li>
                <li><b>Business/services</b> - AI customer service agents, colleagues and bureaucracy</li>
                </ul>
                <p>This will happen because deploying AI is far cheaper and more scalable than employing human beings.  From a 'user' perspective, it will be in many ways more effective, accessible, efficient and convenient.</p>
                <p>However, we will lose many aspects of human connection that we have evolved to need: genuine love and care, the feeling of connection with fellow human beings, their physical presence, the subtle expressions of emotion through body language, facial expression and tone of voice.</p>
                <p>AI system designers will attempt to imitate these things, but unless they create actual clones of human beings, the "uncanny valley" effect may mean that attempts are ultimately counter-productive.</p>
                <p>We will lose our vital connection with other beings who are the same as us, who share the same emotions, values and consciousness.</p>
                <p>Human relationships are foundational to our civilisation.  When we lose one, we lose the other.</p>`,
            solutions: ``,
        },
        {
            title: "Disconnection from reality",
            risks: `<p>As our environment is increasingly populated by AI-generated content and information, which is not grounded in reality itself but in the AI's 'model' of it, we become increasingly disconnected from reality.</p>
                <p>The risk is that we gradually lose our ability to discern what is real/true from what is false, or that which has real value from that which has illusory value.</p>
                <p>This may be compounded by 'model collapse', where an AI learns from its own generated content, leading to a vicious cycle of gradually degraded information, drifting further and further away from reality.</p>`,
            solutions: ``,
        },
        {
            title: "Loss of meaning",
            risks: `<p>So much of life has always revolved around productivity or functional activity.  When this is all handled by automated systems, the nature of our existence fundamentally changes.</p>
                <ul>
                <li>Will enough people be able to find meaning in this new world?</li>
                <li>Assuming we can adapt over time, what pace of transition to the new world could we handle?</li>
                </ul>`,
            solutions: ``,
        },
        {
            title: "Human subjugation",
            risks: `<p>Human dominance in the world is largely due to our intelligence.  Once AI becomes capable of self-improvement and building AI systems itself, it will lead to an 'intelligence explosion' and 'superintelligent' AIs.  It seems quite probable that these superintelligences would then become the dominant force in the world, and humans would be Linksated.</p>
                <p><b>Best case:</b> The superintelligent AIs will be benevolent and perfectly aligned with human values and goals, creating a better world.  Even then, we will have lost the power of self-determination and will be beholden to the good will of the superintelligences.</p>
                <p><b>Worst case:</b> The superintelligent AIs quickly decide that the world is better off without humans, and wiping us out is a trivial matter.</p>`,
            solutions: ``,
        },
        {
            title: "Social breakdown",
            risks: `<p>Considering all of the risks listed on this page, at least some level of breakdown in the social order starts to seem somewhat inevitable.</p>`,
            solutions: ``,
        },
    ],
};

const challenges = {
    general: [
        {
            title: "Understanding the risks",
            challenges: `<p>Simply to form a complete picture of the many risks AI poses to our civilisation is itself a huge challenge.</p>
                <p>We need to consider risk on all the following levels:</p>
                <ul>
                <li><b>Current and future</b> AI systems</li>
                <li>Many different <b>types of AI</b> - e.g. narrow AI, generative AI, AGI, superintelligent AI</li>
                <li>Different <b>models/systems</b> within these - both open source and proprietary</li>
                <li>The variety of <b>use cases</b> of these systems in all the <b>different domains</b> where they may be applied</li>
                </ul>
                <p>We also need to bear in mind that the evolution of the technology is rapid, accelerating and unpredictable - and therefore so is the risk landscape.</p>`,
            solutions: `<ul>
                <li>The <b>AI Safety Project</b> is an attempt to help build understanding of the risk landscape</li>
                <li>More sophisticated, open, global, community-driven platforms will also be needed to share information about the development, deployment and potential risks of AI systems</li>
                </ul>`,
        },
        {
            title: "Mitigating the risks",
            challenges: `<p>Such a broad and varied risk landscape requires a combination of technical, legislative and socio-cultural approaches to mitigation.</p>
                <p>A combination of tools, systems, platforms, protocols and frameworks will need to be employed, but very few of these currently exist, are in use, or are proven to be effective.</p>`,
            solutions: `<ul>
                <li><a href="https://www.neelnanda.io/mechanistic-interpretability/quickstart" target="_blank"><b>Mechanistic interpretability</b></a> is an approach to building provably safe AI systems</li>
                <li>The <b>AI Safety Project</b> is an attempt to share possible solutions</li>
                <li>More sophisticated, open, global, community-driven platforms will also be needed to share risk mitigation techniques and build robust standards</li>
                </ul>`,
        },
        {
            title: "Coordination problems",
            challenges: `<p>'Arms race', 'race to the bottom', 'multi-polar traps' - these are all terms for the same basic coordination problem that surrounds many AI risks.  It can be described as follows:</p>
                <p>All nations recognise both the power of AI and its potential to cause catastrophe.  Even if they know that the careless deployment of AI could lead to civilisational collapse, they are each compelled to pursue its adoption as quickly as possible rather than face competitive disadvantage.</p>
                <p>This problem ultimately needs to be solved at the international level.</p>`,
            solutions: `<ul>
                <li>The Future of Life Institute produces many <a href="https://futureoflife.org/fli-open-letters/" target="_blank"><b>open letters / petitions</b></a> to help raise concerns and lobby for regulation</li>
                <li><a href="https://www.un.org/sites/un2.un.org/files/un_ai_advisory_body_governing_ai_for_humanity_interim_report.pdf" target="_blank"><b>Governing AI for humanity</b></a> - Interim report of the UN AI Advisory Body</li> 
                </ul>`,
        },
        {
            title: "Preventing malicious use",
            challenges: `<p>There are different types of malicious use that need to be considered:</p>
                <ul>
                <li>Development of AI systems for the purpose of causing harm</li>
                <li>Using general-purpose unsecured or open source AI systems to cause harm</li>
                <li>'Jailbreaking' secured AI systems in order to use them for banned malicious purposes</li>
                <li>Using secured AI systems to cause harm in an unanticipated way</li>
                </ul>`,
            solutions: `<ul>
                <li><a href="https://cleverhans-lab.github.io/" target="_blank"><b>CleverHans</b></a> is an open source adversarial training tool to improve the security and robustness of AI systems</li>
                </ul>`,
        },
        {
            title: "Navigating ethical issues",
            challenges: `<p>AI raises many novel ethical issues because it is able to 'choose' between different courses of action in the same way a human might, and its actions may have a significant impact on humans, yet the context and types of decisions it is making may not be comparable to anything humans have ever been capable of.</p>
                <p>There is the added complexity that teams of humans are involved in AI development, yet their involvement is in some ways quite indirect - they are not programming exactly what decisions it should make, for example.</p>
                <p>The following are some ethical issues that must be considered:</p>
                <ul>
                <li>If an AI system causes harm, who is accountable/responsible?</li>
                <li>How should AIs handle moral dilemmas (e.g. <a href="https://fee.org/articles/the-trolley-problem-and-self-driving-cars" target="_blank">'The Trolley Problem' for self-driving cars</a>)?</li>
                <li>Should there be a standard moral framework / constitution that AIs are required to use?  How can this be established/implemented?</li>
                <li>Might there be undesirable consequences of such a moral framework / constitution?</li>
                <li>At what point might AI systems themselves be considered to have rights?</li>
                </ul>
                <h4>Links</h4>
                <p><a href="https://www.coe.int/en/web/bioethics/common-ethical-challenges-in-ai#{%22123745744%22:[]}" target="_blank">Common Ethical Challenges in AI - Council of Europe</a></p>`,
            solutions: `<ul>
                <li>Following the 'Global Forum on the Ethics of AI 2024', UNESCO has published a <a href="https://www.unesco.org/en/artificial-intelligence/recommendation-ethics?hub=99488"><b>Recommendation on the Ethics of AI</a></b></li>
                <li><a href="https://partnershiponai.org/modeldeployment/" target="_blank"><b>Guidance for Safe Foundation Model Deployment</b></a> from Partnership on AI</li>
                <li><a href="https://aypan17.github.io/machiavelli/" target="_blank"><b>The Machiavelli Benchmark</b></a> is a collection of human-written, text-based 'games' that can be used to analyse the general behaviour of an AI agent, particularly how it handles the trade-off between rewards and ethical behaviour</li>
                </ul>`,
        },
    ],
    technical: [
        {
            title: "Explainability",
            challenges: `<p>Such is the complexity of AI systems, their developers usually do not understand exactly how they work.  It is important to develop methods and tools for explaining AI in order to:</p>
                <ul>
                <li>Assess risk (especially predicting risk of new applications)</li>
                <li>Assess security</li>
                <li>Safeguard against bias</li>
                <li>Meet regulations</li>
                <li>Help improve system design</li>
                <li>Increase user/public confidence</li>
                </ul>
                <h4>Links</h4>
                <p><a href="https://royalsociety.org/-/media/policy/projects/explainable-ai/AI-and-interpretability-policy-briefing.pdf" target="_blank"><b>Explainable AI: the basics</b> - The Royal Society</a></p>`,
            solutions: `<ul>
                <li><a href="https://interpret.ml/" target="_blank"><b>Interpret.ml</b></a> is an open source toolkit to help understand models and enable responsible machine learning</li>
                </ul>`,
        },
        {
            title: "Alignment",
            challenges: `<p>How do we ensure that decisions/actions of AI systems are aligned with human values/interests?</p>
                <p>The fundamental problem is that most likely AI systems do not share the same set of implicit 'commonsense' assumptions about the world as humans do.  So when an AI is set a goal, we cannot be sure that it will work towards that goal in what we would consider to be a 'sensible' way - in fact, its actions in pursuit of the goal could be extremely harmful.</p>
                <p>The most frequently cited thought experiment is Nick Bostrom's 'Paperclip maximizer', where a superintelligent AI tasked with manufacturing paperclips converts all matter into paperclips.</p>
                <p>However, AI misalignment is causing real-world problems right now, for example: bias and algorithmic discrimination in content generation/recognition models, flash crashes in the financial markets, and content recommendation algorithms that promote extremism and polarisation.</p>
                <p>`,
            solutions: `<ul>
                <li><a href="https://www.anthropic.com/news/claudes-constitution" target="_blank"><b>Constitutional AI</b></a> is an approach used in some AI systems (notably Anthropic's 'Claude' chatbot) to check output against a 'constitution' (set of rules), representing human values</li>
                <li><a href="https://sagroups.ieee.org/global-initiative/wp-content/uploads/sites/542/2023/01/ead1e.pdf" target="_blank"><b>Ethically aligned design</b></a> - IEEE Standards Association</li>
                </ul>`,
        },
        {
            title: "Control / defence",
            challenges: `<p>When thinking about systems that are developed with safety in mind, the problem of control overlaps significantly with the problem of alignment.</p>
                <p>However, we also need techniques to control/defend against systems that are not designed for alignment, or are designed with malcious intent.</p>
                <p>Key questions are:</p>
                <ul>
                <li>How to protect high-risk systems/platforms (or those designed only for human use) from AI infiltration?</li>
                <li>How to track development and deployment of AI systems?</li>
                <li>How to combat resistance to control from AI systems (e.g. deception, manipulation, replication, adaptation)?</li>
                </ul>`,
            solutions: `<ul>
                <li>Ensuring the <a href="https://www.cam.ac.uk/stories/hardware-ai-safety" target="_blank"><b>physical infrastructure required for AI development (cutting-edge chips / "compute")</b></a> is only accessible to responsible/regulated organisations is an important starting point for control.  There is only one company capable of manufacturing the most advanced chips (Taiwan Semiconductor Manufacturing Company - TSMC) and one capable of designing them (Nvidia).</li>
                <li><a href="https://worldcoin.org/blog/engineering/humanness-in-the-age-of-ai" target="_blank"><b>Proof of personhood systems</b></a> are needed to create 'firewalls' against AI system infiltration</li>
                <li>Open, global, community-driven platforms are needed to share information about the development, deployment and potential risks of AI systems</li>
                </ul>`,
        },
        {
            title: "Security",
            challenges: `<p>AI development presents multiple security challenges.  Threats include:</p>
                <ul>
                <li><b>'Jailbreaking'</b> or other adversarial attacks, whereby an attacker attempts to bypass guardrails</li>
                <li><b>Reverse engineering or theft</b> of the models/weights themselves</li>
                <li><b>Data poisoning</b> - where the dataset an AI is trained on is injected with malicious data to maniuplate the behaviour of the system</li>
                <li><b>Privacy</b> - training datasets may contain sensitive data and centralise this on servers making it vulnerable to theft or discovery by querying the model</li>
                </ul>`,
            solutions: `<ul>
                <li><b>Red-teaming / adversarial training</b> is needed to build robust and secure systems</li>
                <li><b>Federated learning systems such as <a href="https://github.com/OpenMined/PySyft" target="_blank">PySyft</a></b> take a decentralised approach to AI training that reduces risks to privacy</li>
                </ul>`,
        },
        {
            title: "Output identification",
            challenges: `<p>How can we distinguish AI-generated content from human-generated content?</p>
                <p>This is essential to: 
                <ul>
                <li>Combat misinformation</li>
                <li>Preserve truth</li>
                <li>Prevent loss of trust</li>
                <li>Protect against fraud and manipulation</li>
                </ul>
                <p>Approaches will be needed for all kinds of AI-generated content: text, images, video, audio.</p>
                <p>We must also mitigate against:</p>
                <ul>
                <li>False positives from inaccurate 'AI detection' tools</li>
                <li>Malicious tampering with real content to falsely flag it as AI-generated</li>
                </p>`,
            solutions: `<ul>
                <li>The <a href="https://c2pa.org/" target="_blank"><b>Coalition for Content Provenance and Authenticity (C2PA)</b></a> is an open technical standard for tracking content provenance using cryptographic signatures</li>
                </ul>`,
        },
    ],
};

// EVENT HANDLERS

function show_next_overlay() {
    let displayed_overlay = $("#overlays").find(":visible");
    $(".overlay").hide();
    displayed_overlay.next().show();
    reset_background_scroll();
}

function show_prev_overlay() {
    let displayed_overlay = $("#overlays").find(":visible");
    $(".overlay").hide();
    displayed_overlay.prev().show();
    reset_background_scroll();
}

function reset_background_scroll() {
    setTimeout(function () {
        if (
            $("#close-nav-btn").is(":visible") ||
            $(".overlay").is(":visible")
        ) {
            $("body").css({ overflow: "hidden" });
        } else {
            $("body").css({ overflow: "scroll" });
        }
    }, 500);
}

function load_event_handlers() {
    $("#risks-btn").click(function () {
        window.location = "risks.html";
    });

    $("#challenges-btn").click(function () {
        window.location = "challenges.html";
    });

    $(".box").click(function () {
        var overlay_id = $(this).data("overlay");
        $(".overlay").hide();
        $("#" + overlay_id).show();
        reset_background_scroll();
    });

    $(".close").click(function () {
        $(".overlay").hide();
        reset_background_scroll();
    });

    $(".left-chevron").hover(
        function () {
            $(this).animate({ paddingLeft: "0", opacity: "1" }, 100);
        },
        function () {
            $(this).animate({ paddingLeft: "10px", opacity: "0.8" }, 100);
        }
    );
    $(".right-chevron").hover(
        function () {
            $(this).animate({ paddingRight: "0", opacity: "1" }, 100);
        },
        function () {
            $(this).animate({ paddingRight: "10px", opacity: "0.8" }, 100);
        }
    );
    $(".left-chevron").click(function () {
        show_prev_overlay();
    });
    $(".right-chevron").click(function () {
        show_next_overlay();
    });
    $(".arrow.left").click(function () {
        show_prev_overlay();
    });
    $(".arrow.right").click(function () {
        show_next_overlay();
    });

    $("#mobile-nav-btn").click(function () {
        window.scrollTo(0, 0);
        $("nav").fadeToggle();
        $("#mobile-nav-btn").fadeToggle();
        $("#close-nav-btn").fadeToggle();
        reset_background_scroll();
    });
    $("#close-nav-btn").click(function () {
        window.scrollTo(0, 0);
        $("nav").fadeToggle();
        $("#mobile-nav-btn").fadeToggle();
        $("#close-nav-btn").fadeToggle();
        reset_background_scroll();
    });

    $(document).keydown(function (e) {
        if (e.key === "ArrowRight") {
            $(".right-chevron").animate(
                { paddingRight: "0", opacity: "1" },
                100
            );
        }
        if (e.key === "ArrowLeft") {
            $(".left-chevron").animate({ paddingLeft: "0", opacity: "1" }, 100);
        }
    });

    $(document).keyup(function (e) {
        if (e.key === "Escape") {
            $(".overlay").hide();
            reset_background_scroll();
        }
        if (e.key === "ArrowRight") {
            $(".right-chevron").animate(
                { paddingRight: "10px", opacity: "0.8" },
                100
            );
            show_next_overlay();
        }
        if (e.key === "ArrowLeft") {
            $(".left-chevron").animate(
                { paddingLeft: "10px", opacity: "0.8" },
                100
            );
            show_prev_overlay();
        }
    });
}

// RENDERING

function construct_button(id, title) {
    return `<div class="box small" data-overlay="${id}"><h3>${title}</h3></div>`;
}

function construct_overlay(page, id, title, risks, solutions) {
    let left_col_title = "Risks";
    if (page == challenges) {
        left_col_title = "Challenges";
    }
    return `<div id="${id}" class="overlay" style="display: none;">
        <img src="img/left-chevron.svg" class="left-chevron" />
        <div class="modal">
        <img src="img/close.svg" class="close" />
        <h2>${title}</h2>
            <div class="flex-container">
                <div class="half red">
                    <h3>${left_col_title}</h3>
                    ${risks}
                </div>
                <div class="half green">
                    <h3>Solutions</h3>
                    ${solutions}
                </div>
            </div>
        </div>
        <img src="img/right-chevron.svg" class="right-chevron" />
        <div id="mobile-arrows">
            <div class="arrow left"><img src="img/left-chevron.svg" class="left-chevron-mobile" /></div>
            <div class="arrow right"><img src="img/right-chevron.svg" class="right-chevron-mobile" /></div>
        </div>
    </div>`;
}

function string_to_id(string) {
    return string.replace(/\W/g, "-").toLowerCase();
}

function render_column(page, category) {
    let buttons = "";
    let data = page[category];
    for (let item of data) {
        let id = string_to_id(item["title"]);
        let title = item.title;
        let button = construct_button(id, title);
        buttons += button;
    }
    $("#" + category).append(buttons);
}

function render_overlays(page, category) {
    let overlays = "";
    let data = page[category];
    for (let item of data) {
        let id = string_to_id(item["title"]);
        let risks_or_challenges = item.risks;
        if (page == challenges) {
            risks_or_challenges = item.challenges;
        }
        let overlay = construct_overlay(
            page,
            id,
            item.title,
            risks_or_challenges,
            item.solutions
        );
        overlays += overlay;
    }
    $("#overlays").append(overlays);
}

function render_risks_page() {
    let categories = ["catastrophe", "disruption", "erosion"];
    for (let category of categories) {
        render_column(risks, category);
        render_overlays(risks, category);
    }
}

function render_challenges_page() {
    let categories = ["general", "technical"];
    for (let category of categories) {
        render_column(challenges, category);
        render_overlays(challenges, category);
    }
}

$(document).ready(function () {
    if (window.location.pathname.includes("risks")) {
        render_risks_page();
    }
    if (window.location.pathname.includes("challenges")) {
        render_challenges_page();
    }

    load_event_handlers();

    $("body").fadeIn();
});
