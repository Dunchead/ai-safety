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
            solutions: `<p>The <a href="https://www.un.org/sg/en/content/sg/note-correspondents/2023-10-05/note-correspondents-joint-call-the-united-nations-secretary-general-and-the-president-of-the-international-committee-of-the-red-cross-for-states-establish-new" target="_blank">United Nations has called on world leaders</a> to negotiate a legally binding agreement restricting the use of autonomous weapons by 2026. In Dec 2024, 166 countries voted in favor of a UN General Assembly resolution creating a forum to address autonomous weapons and urging treaty negotiations.  The <a href="https://en.wikipedia.org/wiki/Chemical_Weapons_Convention" target="_blank">Chemical Weapons Convention</a> and the <a href="https://en.wikipedia.org/wiki/Treaty_on_the_Non-Proliferation_of_Nuclear_Weapons" target="_blank">Treaty on the Non-Proliferation of Nuclear Weapons</a> are successful examples of similar international agreements.</p>
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
            solutions: `<ul>
                <li><a href="https://international-review.icrc.org/articles/ai-and-machine-learning-in-armed-conflict-a-human-centred-approach-913" target="_blank">ICRC (Int'l Review)</a> calls for a human-centered approach, ensuring AI in warfare complies with international humanitarian law.</li>
                <li><a href="https://www.nato.int/cps/en/natohq/official_texts_227237.htm" target="_blank">NATO (2024 AI Strategy)</a> endorses six Principles of Responsible Use (lawfulness, accountability, reliability, etc.) for allied military AI.</li>
                <li><a href="https://www.defense.gov/News/News-Stories/Article/Article/2094085/dod-adopts-5-principles-of-artificial-intelligence-ethics/" target="_blank">U.S. DoD (2020)</a> formalized five AI ethics principles (responsible, equitable, traceable, reliable, governable) to guide military AI development.</li>
                </ul>`,
        },
        {
            title: "Biotech / nanotech",
            risks: `<p><b>Current risk:</b> AI chatbots can lower the knowledge barrier in these high-risk fields such that anyone with a computer can learn how to build something of potentially devastating lethality:</p>
                <ul>
                <li>AI chatbots could provide "gain of function" formulae for dangerous new viruses that, combined with ever-cheaper DIY biotech equipment, significantly lowers the barrier for developing bioweapons and increases the risk of disastrous accidents</li>
                <li>AI could also accelerate nanotech research, opening up a whole new field of poorly understood risk</li>
                <li>The use of AI in gene editing presents similar concerns</li>
                </ul>
                <p><b>Future risk:</b> When AI systems can do all of the above without human intervention, the risk goes off the scale.  Researchers highlight that advanced AI could enable the recreation of extinct viruses or the creation of novel pathogens, both posing extreme pandemic risks.</p>`,
            solutions: `<p>The <a href="https://www.wmdp.ai/" target="_blank"><b>Weapons of Mass Destruction Proxy (WMDP) benchmark</b></a> from the Centre for AI Safety is a dataset of 4,157 multiple-choice questions surrounding hazardous knowledge in biosecurity, cybersecurity, and chemical security.  WMDP serves as both a proxy evaluation for hazardous knowledge in large language models (LLMs) and a benchmark for unlearning methods to remove such knowledge.
            </p>
                <p>General considerations:</p>
                <ul>
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
                <li>Widespread use of similar AI models could amplify market stress: common strategies increase correlation and exacerbate crashes</li>
                <li>AI-enabled market manipulation and fraud (e.g. personalized disinformation campaigns) introduce new financial instability</li>
                <li>Use of AI in economic policy decisions that have misaligned or unexpected consequences</li>
                </ul>
                <h4>Links</h4>
                <p><a href="https://www.imf.org/en/Publications/fintech-notes/Issues/2023/08/18/Generative-Artificial-Intelligence-in-Finance-Risk-Considerations-537570" target="_blank"><b>Generative Artificial Intelligence in Finance: Risk Considerations</b> - IMF</a></p>`,
            solutions: `<ul>
                <li>Circuit breakers or AI "kill-switches" to pause algorithmic trading during extreme market moves</li>
                <li>Enhanced monitoring: regulators should collect more data on AI deployment and conduct stress tests (per FSB recommendations)</li>
                <li>Encourage diversity of trading algorithms and robust risk management to avoid homogeneous market behavior</li>
                </ul>`,
        },
    ],
    disruption: [
        {
            title: "Unemployment / inequality",
            risks: `<p>It is clear that AI will lead to job displacement, but there is little consensus on exactly how much.  A <a href="https://www.oxfordmartin.ox.ac.uk/downloads/academic/The_Future_of_Employment.pdf">seminal 2013 study</a> said that potentially half of all jobs in the US could be at risk, though did not even include creative professions that are already experiencing job loss due to AI.  More recent studies in the UK have estimated anything from 7% to 30%.</p>
                <p>Job displacement caused by AI is more concerning than historical technological unemployment because of the probability of increasing net job losses.  There may be new jobs created in the short term, but as AI capabilities increase these may also quickly be lost.  This presents significant risk for the very foundations of global society.</p>
                <h4>Links</h4>
                <p><a href="https://assets.publishing.service.gov.uk/media/615d9a1ad3bf7f55fa92694a/impact-of-ai-on-jobs.pdf" target="_blank"><b>The Potential Impact of Artificial Intelligence on UK Employment and the Demand for Skills</b> - PwC (2023)</a></p>
                <p><a href="https://www.pwc.com/gx/en/issues/artificial-intelligence/publications/ai-jobs-barometer.html" target="_blank"><b>The Fearless Future: 2025 Global AI Jobs Barometer</b> - PwC (June 2025)</a></p>`,
            solutions: `<ul>
                <li>Explore policies to equitably share AI-driven productivity gains, such as universal basic income or "robot taxes"</li>
                <li>Invest in education, reskilling and job creation programs to help workers transition to new roles</li>
                <li>Re-envision work and social purpose in a future where traditional jobs are less central to identity</li>
                </ul>`,
        },
        {
            title: "Crime",
            risks: `<p>Crime is already being transformed by AI.  Potential harms include:</p>
                <ul>
                <li><b>Scams</b> - Audio/visual deepfakes are used for impersonation in scams; LLMs can generate convincing scripts</li>
                <li><b>Deepfake pornography</b> - Deepfake pornography based upon real people can be created for profit/blackmail</li>
                <li><b>Information for criminal activity</b> - LLMs can assist in fraud, or provide information that can be used for criminal/terrorist activity (e.g. bomb-making recipes)</li>
                <li><b>Automated cybercrime</b> – AI-driven hacking, ransomware and identity theft at scale</li>
                <li><b>Smart fraud</b> – highly personalized phishing and investment scams</li>
                <li><b>Organized crime</b> – Coordination of illicit networks with AI tools</li>
                </ul>`,
            solutions: `<p>Despite existing legal penalties for engaging in these activities, further measures will be needed to counter the increased threat introduced by AI:</p>
                <ul>
                <li><b>Raise awareness</b> of growing AI capabilities and potential for use in scams</li>
                <li><b>Implement guardrails</b> to prevent output of scripts designed for manipulation / social engineering</li>
                <li><b>Monitor user interactions</b> for suspicious prompts</li>
                <li>Use AI-powered defenses (anomaly detection, threat hunting) to counter AI-driven crime</li>
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
                <li>Implement robust bias testing and mitigation techniques</li>
                <li>Ensure diverse representation in AI development teams</li>
                <li>Establish clear guidelines for responsible AI deployment</li>
                <li>Regularly audit AI systems for fairness and bias</li>
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
                <p><a href="https://www.amnesty.org/en/latest/campaigns/2024/01/the-urgent-but-difficult-task-of-regulating-artificial-intelligence" target="_blank">Amnesty International has emphasised</a> that the US, UK and EU should prohibit the export of AI systems to countries where they could be used to harm the human rights of marginalised groups.</p>
                <p>In general, we must:</p>
                <ul>
                <li>Establish strong legal frameworks for AI governance</li>
                <li>Implement transparency and oversight mechanisms</li>
                <li>Protect civil liberties and human rights</li>
                <li>Promote international cooperation on AI governance</li>
                </ul>`,
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
            solutions: `<p>Experts warn that AI companions can undermine human bonds if left unchecked. The American Psychological Association cautions that without safeguards, adolescents can develop “unhealthy and even dangerous” attachments to chatbots. To prevent this, stakeholders are proposing measures that preserve genuine human connection. </p>
                <ul>
                <li><strong>Design AI with boundaries and human oversight:</strong> Systems should clearly disclose they are not human and prevent emotional manipulation. For example, the APA recommends ensuring “healthy boundaries with simulated human relationships” by building in age-appropriate defaults, privacy settings and mandatory disclaimers. Developers should follow ethical guidelines prioritizing user wellbeing, so AI companions do not exploit vulnerabilities or replace human care.</li>
                <li><strong>Emphasize human–AI collaboration:</strong> Treat AI as an assistive tool, not a replacement for people. Experts envision AI freeing workers from mundane tasks so humans can do more meaningful work. In practice, organizations can retrain employees (via digital bootcamps or education programs) to use AI tools effectively, allowing people to focus on decision-making, creativity and empathy. This preserves jobs and human autonomy even as technology advances.</li>
                <li><strong>Promote education and community programs:</strong> Integrate AI literacy and social-emotional learning into schools and communities. International efforts (e.g. the EU/OECD AI Literacy Framework) aim to teach citizens how AI works and its limits. Governments can fund initiatives like Finland’s free “Elements of AI” course, which demystifies AI for all adults. Simultaneously, community centers and social services can pair human support with technology (for example, supervised social robots in eldercare) to strengthen, rather than replace, human contact.</li>
                </ul>`,
        },
        {
            title: "Disconnection from reality",
            risks: `<p>As our environment is increasingly populated by AI-generated content and information, which is not grounded in reality itself but in the AI's 'model' of it, we become increasingly disconnected from reality.</p>
                <p>The risk is that we gradually lose our ability to discern what is real/true from what is false, or that which has real value from that which has illusory value.</p>
                <p>This may be compounded by 'model collapse', where an AI learns from its own generated content, leading to a vicious cycle of gradually degraded information, drifting further and further away from reality.</p>`,
            solutions: `<p>Heavy reliance on AI-generated content risks creating an alternate reality bubble or rampant misinformation. Governments and tech bodies are implementing transparency and literacy countermeasures. The new EU AI Act will require all generative AI outputs (text, images, audio) to be machine-watermarked so users can tell they’re synthetic. Similarly, the Council of Europe’s recent AI convention enforces transparency and oversight on AI systems, including identifying AI-generated content. Such rules help the public distinguish real information from AI fabrications.</p>
                <ul>
                <li><strong>Mandatory labeling and provenance:</strong> Legal rules now force AI companies to tag their content. The EU’s law explicitly mandates that AI-generated media be marked in a machine-readable way. These technical requirements (e.g. robust watermarking, metadata standards) ensure that misleading deepfakes or synthetic news can be detected. By making AI content traceable, these measures curb large-scale disinformation campaigns.</li>
                <li><strong>Media and AI literacy education:</strong> Teach people to critically assess sources and AI’s fallibility. Education systems are moving beyond basic digital skills to include AI literacy (for example, the joint EU/OECD AILit Framework for schools). Public campaigns and school curricula can explain how to spot AI biases or hallucinations. The APA and others urge integrating AI-awareness in learning so that users remain vigilant about AI’s limitations.</li>
                <li><strong>Robust safety and oversight standards:</strong> Encourage engineering and governance practices that reduce errors. For instance, the U.S. Executive Order on AI directs agencies to use the NIST AI Risk Management Framework for high-impact applications. This means enforcing rigorous testing, human review (especially in critical use cases), and transparent auditing. Tech firms can adopt techniques like retrieval-augmented models and adversarial testing to minimize AI “hallucinations,” and they should avoid training future models on synthetic AI content to prevent a degrading feedback loop.</li>
                </ul>`,
        },
        {
            title: "Loss of meaning",
            risks: `<p>So much of life has always revolved around productivity or functional activity.  When this is all handled by automated systems, the nature of our existence fundamentally changes.</p>
                <ul>
                <li>Will enough people be able to find meaning in this new world?</li>
                <li>Assuming we can adapt over time, what pace of transition to the new world could we handle?</li>
                </ul>`,
            solutions: `<p>As AI automates many jobs, people may feel a loss of purpose. Analysts argue for social and economic policies that ensure meaning beyond work. For example, Finland’s basic-income experiment (2017–18) found that while employment didn’t rise, recipients reported significantly higher life satisfaction and well-being. In Austria, a “job guarantee” pilot gave paid work to every long-term unemployed resident, virtually eliminating chronic joblessness while making participants happier, more self-confident, and more connected to their community. These examples show that security and community roles can restore a sense of value.</p>
                <ul>
                <li><strong>Universal support and guaranteed work:</strong> Provide financial and social anchors independent of specific jobs. Policies like unconditional basic income or public job guarantees give people a stake and purpose. (The Austrian pilot above, for instance, showed that guaranteed jobs increased participants’ sense of control and meaningful social interaction.) By ensuring everyone has a way to contribute (even if not in private-sector work), these programs prevent an existential void.</li><li><strong>Redistribute work and leisure:</strong> Normalize shorter workweeks to allow more time for creative and family activities. Trials of four-day workweeks (e.g. in Spain) have shown that workers reported better health, less stress, and greater happiness with the extra day off. Societies can adapt by measuring success in well-being (not just GDP), letting people use freed-up time for volunteerism, hobbies or personal development without stigma.</li><li><strong>Lifelong learning and skill-building:</strong> Invest in free education and retraining so people can pursue new, fulfilling roles. Many governments are expanding retraining programs in both high-tech and creative fields. For instance, Finland’s nation-wide “Elements of AI” course (offered free to all citizens) aims to upskill the population in AI basics. By fostering continuous learning in arts, science, and technology, displaced workers can find new passions and civic contributions.</li>
                <li><strong>Meaningful workplace design:</strong> Ensure remaining jobs emphasize autonomy and impact. Research shows that employees feel purpose when they can learn, make decisions, and see the positive outcomes of their work. Companies can use AI to remove drudgery while letting humans lead on strategy and innovation. Culturally, promoting values like community service, creativity and stewardship helps individuals derive meaning from diverse sources beyond economic productivity.</li>
                </ul>`,
        },
        {
            title: "Human subjugation",
            risks: `<p>Human dominance in the world is largely due to our intelligence.  Once AI becomes capable of self-improvement and building AI systems itself, it will lead to an 'intelligence explosion' and 'superintelligent' AIs.  It seems quite probable that these superintelligences would then become the dominant force in the world, and humans would be subjugated.</p>
                <p><b>Best case:</b> The superintelligent AIs will be benevolent and perfectly aligned with human values and goals, creating a better world.  Even then, we will have lost the power of self-determination and will be beholden to the good will of the superintelligences.</p>
                <p><b>Worst case:</b> The superintelligent AIs quickly decide that the world is better off without humans, and wiping us out is a trivial matter.</p>`,
            solutions: `<p>To prevent humans losing autonomy to powerful AI, policymakers advocate strict oversight and alignment measures. On the international stage, binding agreements are emerging: in 2024 the Council of Europe adopted the first global AI treaty (open to non-members) that aims to ensure AI use “respects human rights, the rule of law and democracy”. These commitments complement other frameworks (e.g. EU AI Act, UNESCO’s AI Ethics) that enshrine human dignity and oversight. Such governance seeks to keep ultimate control in human hands as systems become more capable.</p>
                <ul>
                <li><strong>Global governance and treaties:</strong> Negotiate international agreements to limit unchecked AI. The Council of Europe’s treaty requires transparency and risk-based oversight on AI, and could be joined by non-EU countries. Proposals like a UN AI safety body or an “AI Geneva Convention” follow similar ideas, aiming to coordinate on issues like non-proliferation of dangerous AI and shared safety standards.</li>
                <li><strong>Ethical design and human-in-the-loop:</strong> Build AI to preserve human decision authority. The EU AI Act legally mandates that advanced AI systems include human oversight mechanisms. In practice, developers are urged to incorporate “constitutional” constraints (e.g. hard-coded rights), continuous monitoring, and reinforcement learning guided by human values. Adhering to globally recognized AI ethics (such as UNESCO’s principles of human dignity and autonomy) helps ensure AI systems serve humanity rather than control it.</li>
                <li><strong>Rights and regulatory safeguards:</strong> Strengthen legal protections of autonomy. Examples include laws guaranteeing individuals the right to explanation or human review of significant AI decisions, strict limits on AI surveillance, and data-privacy rules that prevent covert manipulation. Civil society can also advocate for an explicit “right to opt out” of automated systems. By encoding human rights into AI governance, people remain the final arbiter of major life choices.</li>
                </ul>`,
        },
        {
            title: "Social breakdown",
            risks: `<p>Considering all of the risks listed on this page, at least some level of breakdown in the social order starts to seem somewhat inevitable.</p>`,
            solutions: `<p>Broad social risks like mass unemployment and loss of trust call for multifaceted solutions. Economists suggest redistributing AI’s gains: for instance, taxing automation (so-called “robot taxes”) can fund retraining and social welfare. Technologists emphasize accountability: the U.S. government’s 2023 Executive Order on AI set new standards for “safe, secure, and trustworthy” AI – including privacy protections, equity for workers and consumers, and mandatory risk management for high-stakes systems. Such measures help maintain institutional trust as society adapts to AI.</p>
                <ul>
                <li><strong>Expanded social safety nets:</strong> Update welfare, unemployment and retraining programs for an AI economy. This might involve generous unemployment insurance, universal benefits, or public employment programs (as in the Austrian pilot above). International bodies note that policy focus should shift to human and environmental well-being (not just GDP growth) as AI changes the labor market. By preparing people financially and socially, governments can avert the despair that follows job loss.</li>
                <li><strong>Trustworthy AI policies:</strong> Build transparency and accountability to prevent erosion of trust. The Biden administration’s policies (for example EO 14110) require companies to conduct independent audits, bias assessments, and to protect civil rights and privacy. Similar regulatory efforts (like the EU’s rules on high-risk AI) compel developers to publish “impact statements” and remedy harms. These oversight frameworks reassure the public that AI is aligned with democratic values.</li>
                <li><strong>Community and human connection:</strong> Counter social isolation with engagement initiatives. Invest in community centers, support networks, and programs that encourage face-to-face interaction (e.g. volunteering, civic tech projects, arts and sports programs). Technology can aid this (e.g. telehealth services connecting patients with human counselors), but should be used to enhance social ties rather than replace them. Fostering empathy and collective purpose at the local level helps buffer society against the atomizing effects of AI.</li>
                </ul>`,
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
                <li><a href="https://aisafetyfundamentals.com/" target="_blank"><b>AI Safety Fundamentals</b></a> offer courses on AI alignment and governance, designed by AI safety experts</li>
                <li>The <a href="https://www.alignmentforum.org/" target="_blank"><b>AI Alignment Forum</b></a> and <a href="https://www.lesswrong.com/" target="_blank"><b>LessWrong.org</b></a> are online hubs for discussion around AI safety</li>
                <li>The <b>AI Safety Project</b> is an attempt to help build understanding of the risk landscape</li>
                <li><a href="https://www.aitracker.org/" target="_blank"><b>AI Tracker</b></a> is an effort to monitor cutting-edge AI developments in real time, to help researchers and policy specialists better understand the AI risk landscape.</li>
                <li>More sophisticated, open, global, community-driven platforms will also be needed to share information about the development, deployment and potential risks of AI systems</li>
                </ul>`,
        },
        {
            title: "Mitigating the risks",
            challenges: `<p>Such a broad and varied risk landscape requires a combination of technical, legislative and socio-cultural approaches to mitigation.</p>
                <p>A combination of tools, systems, platforms, protocols and frameworks will need to be employed, but very few of these currently exist, are in use, or are proven to be effective.</p>`,
            solutions: `<ul>
                <li><a href="https://www.gov.uk/government/publications/emerging-processes-for-frontier-ai-safety" target="_blank"><b>Emerging processes for frontier AI safety</b></a> is a UK Government policy paper outlining a range of safety measures being taken by developers of frontier AI systems</li>
                <li>This <a href="https://www.gladstone.ai/action-plan" target="_blank"><b>AI Action Plan</b></a>, commissioned by the US State Department, is designed to mitigate catastrophic risk from weaponisation and loss of control of advanced AI systems</li>
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
                <li>G7 Hiroshima Process (2023) – G7 leaders endorsed international guiding principles and a code of conduct for organizations developing advanced AI</li>
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
                <li>Develop shared threat intelligence and best practices across industry and government</li>
                <li>Implement strict controls on AI model releases (e.g. staged rollouts, risk assessments) and monitoring for abuse</li>
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
                <li>Techniques like feature visualization, attention mapping, and surrogate models (as studied by the <a href="https://royalsociety.org/topics-policy/projects/machine-learning/">Royal Society</a>)</li>
                <li>Ongoing research in interpretable ML and "mechanistic" understanding of networks</li>
                <li>Regulatory requirements for explainability in high-risk systems</li>
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
                <li>Reinforcement Learning from Human Feedback (RLHF) and iterative fine-tuning of models to human preferences</li>
                <li>Developing and applying AI safety research (via OpenAI, Anthropic, FHI, ALIGN, etc.) to test and improve alignment</li>
                <li>International standards for AI ethics (e.g. IEEE or UNESCO guidelines, as in 2024 recommendations)</li>
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
                <li><a href="https://atlas.mitre.org/matrices/ATLAS" target="_blank"><b>Mitre ATLAS</b></a> (Adversarial Threat Landscape for Artificial-Intelligence Systems) is a living knowledge base of AI adversary tactics and techniques</li>
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
        window.location = "/ai-safety/risks";
    });

    $("#challenges-btn").click(function () {
        window.location = "/ai-safety/challenges";
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
