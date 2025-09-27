import { useRef, useState, useEffect, useMemo } from 'react';
import { ArrowRight } from 'react-feather';
import { useNavigate } from 'react-router';
import {
        type LucideIcon,
        LineChart,
        CreditCard,
        Target,
        Users,
        ShieldCheck,
        HeartPulse,
        ClipboardList,
        Stethoscope,
        Gauge,
        Workflow,
        Cpu
} from 'lucide-react';
import {
        AgentModeToggle,
        type AgentMode,
} from '../components/agent-mode-toggle';
import { useAuthGuard } from '../hooks/useAuthGuard';

export default function Home() {
	const navigate = useNavigate();
	const { requireAuth } = useAuthGuard();
        const textareaRef = useRef<HTMLTextAreaElement>(null);
        const MODE_MARKETING: Record<AgentMode, {
                heroTitle: string;
                heroSubtitle: string;
                placeholders: string[];
                features: Array<{
                        title: string;
                        description: string;
                        icon: LucideIcon;
                        badgeClass: string;
                        iconClass: string;
                }>;
        }> = useMemo(() => ({
                deterministic: {
                        heroTitle: 'What production system should we ship today?',
                        heroSubtitle:
                                'Describe the workflow you need and Orange Build will deliver a phase-planned, reviewable app that ships straight to Cloudflare with deterministic quality gates.',
                        placeholders: [
                                'governance dashboard with audit-ready exports',
                                'multi-stage devops release coordinator',
                                'enterprise knowledge base with approval queue',
                        ],
                        features: [
                                {
                                        title: 'Deterministic delivery',
                                        description:
                                                'Structured generation, phase checkpoints, and reproducible builds keep compliance teams confident every release matches the spec.',
                                        icon: ShieldCheck,
                                        badgeClass: 'rounded-xl bg-emerald-500/10 text-emerald-500',
                                        iconClass: 'h-5 w-5',
                                },
                                {
                                        title: 'Phase visibility',
                                        description:
                                                'Granular stage tracking and blueprint clarity ensure stakeholders know exactly what ships in each iteration.',
                                        icon: ClipboardList,
                                        badgeClass: 'rounded-xl bg-sky-500/10 text-sky-500',
                                        iconClass: 'h-5 w-5',
                                },
                                {
                                        title: 'Operational resilience',
                                        description:
                                                'Automatic static analysis, runtime validation, and code fix flows deliver audit-friendly apps without regression surprises.',
                                        icon: Users,
                                        badgeClass: 'rounded-xl bg-slate-500/10 text-slate-500',
                                        iconClass: 'h-5 w-5',
                                },
                                {
                                        title: 'Cloudflare-native deployment',
                                        description:
                                                'Deploy instantly to Workers, Durable Objects, KV, and D1 with production-ready configs wired into every scaffold.',
                                        icon: Target,
                                        badgeClass: 'rounded-xl bg-purple-500/10 text-purple-500',
                                        iconClass: 'h-5 w-5',
                                },
                        ],
                },
                smart: {
                        heroTitle: 'What adaptive AI product should we orchestrate?',
                        heroSubtitle:
                                'Ask for the outcome and Smart Mode dynamically plans, converses, and iterates with you—shipping polished experiences that learn from every prompt.',
                        placeholders: [
                                'multi-tenant analytics workspace with AI insights',
                                'onboarding concierge that adapts per persona',
                                'developer portal with real-time guidance copilot',
                        ],
                        features: [
                                {
                                        title: 'Adaptive orchestration',
                                        description:
                                                'Multi-agent planning adjusts blueprints as requirements evolve, keeping complex builds aligned without manual wrangling.',
                                        icon: Workflow,
                                        badgeClass: 'rounded-xl bg-violet-500/10 text-violet-500',
                                        iconClass: 'h-5 w-5',
                                },
                                {
                                        title: 'Reasoning-first UX',
                                        description:
                                                'Smart responses explain decisions, outline trade-offs, and surface follow-up actions so teams stay in the loop.',
                                        icon: Gauge,
                                        badgeClass: 'rounded-xl bg-amber-500/10 text-amber-500',
                                        iconClass: 'h-5 w-5',
                                },
                                {
                                        title: 'Continuous learning',
                                        description:
                                                'Conversation memory, blueprint diffs, and telemetry keep refinements grounded in prior context.',
                                        icon: Cpu,
                                        badgeClass: 'rounded-xl bg-cyan-500/10 text-cyan-500',
                                        iconClass: 'h-5 w-5',
                                },
                                {
                                        title: 'Instant deployment',
                                        description:
                                                'Smart Mode manages preview builds and redeployments so you can validate changes in minutes.',
                                        icon: Target,
                                        badgeClass: 'rounded-xl bg-fuchsia-500/10 text-fuchsia-500',
                                        iconClass: 'h-5 w-5',
                                },
                        ],
                },
                revenue: {
                        heroTitle: 'What revenue engine should we build today?',
                        heroSubtitle:
                                'Describe the monetization experience you need—VibeSDK will orchestrate a pricing playground, conversion funnel, and analytics-ready web app that ships straight to Cloudflare.',
                        placeholders: [
                                'self-serve pricing lab for enterprise buyers',
                                'sales-assisted trial hub with product analytics',
                                'partner revenue cockpit with upsell workflows',
                        ],
                        features: [
                                {
                                        title: 'Monetization-first templates',
                                        description:
                                                'Automatically scaffold pricing pages, upgrade flows, trial gating, and compliant checkout touchpoints tuned for ARR growth.',
                                        icon: CreditCard,
                                        badgeClass: 'rounded-xl bg-amber-500/10 text-amber-500',
                                        iconClass: 'h-5 w-5',
                                },
                                {
                                        title: 'Revenue intelligence baked in',
                                        description:
                                                'Blueprints include attribution dashboards, funnel analytics, and lifecycle instrumentation ready for RevOps teams.',
                                        icon: LineChart,
                                        badgeClass: 'rounded-xl bg-sky-500/10 text-sky-500',
                                        iconClass: 'h-5 w-5',
                                },
                                {
                                        title: 'Lifecycle activation journeys',
                                        description:
                                                'Onboarding tours, success workspaces, and partner enablement portals arrive pre-wired for expansion and renewals.',
                                        icon: Users,
                                        badgeClass: 'rounded-xl bg-emerald-500/10 text-emerald-500',
                                        iconClass: 'h-5 w-5',
                                },
                                {
                                        title: 'Packaging experiments on-demand',
                                        description:
                                                'Launch segmented GTM experiments—usage tiers, localized offers, paywall tests—directly from the generated admin controls.',
                                        icon: Target,
                                        badgeClass: 'rounded-xl bg-fuchsia-500/10 text-fuchsia-500',
                                        iconClass: 'h-5 w-5',
                                },
                        ],
                },
                healthcare: {
                        heroTitle: 'Which care delivery workflow should we automate next?',
                        heroSubtitle:
                                'Sketch the patient or clinician journey and CareOps Mode assembles HIPAA-ready intake, scheduling, triage, and follow-up systems with compliant data handling baked in.',
                        placeholders: [
                                'virtual-first clinic intake and triage hub',
                                'population health dashboard with risk alerts',
                                'care team command center with secure messaging',
                        ],
                        features: [
                                {
                                        title: 'Regulatory-grade scaffolding',
                                        description:
                                                'Consent capture, PHI-safe storage patterns, audit trails, and role-based controls are specified in every blueprint to protect patient trust.',
                                        icon: ShieldCheck,
                                        badgeClass: 'rounded-xl bg-sky-500/10 text-sky-500',
                                        iconClass: 'h-5 w-5',
                                },
                                {
                                        title: 'End-to-end patient journeys',
                                        description:
                                                'Automate intake, triage, care plan management, and follow-ups with multilingual, accessible experiences for every population.',
                                        icon: HeartPulse,
                                        badgeClass: 'rounded-xl bg-rose-500/10 text-rose-500',
                                        iconClass: 'h-5 w-5',
                                },
                                {
                                        title: 'Connected clinical stack',
                                        description:
                                                'Blueprints detail integrations for EHR/FHIR sync, telehealth, secure messaging, claims, and medical devices with schema callouts.',
                                        icon: Stethoscope,
                                        badgeClass: 'rounded-xl bg-indigo-500/10 text-indigo-500',
                                        iconClass: 'h-5 w-5',
                                },
                                {
                                        title: 'CareOps monetization levers',
                                        description:
                                                'Design reimbursable RPM/CCM programs, employer and payer portals, or premium concierge tiers to unlock new revenue lines.',
                                        icon: LineChart,
                                        badgeClass: 'rounded-xl bg-emerald-500/10 text-emerald-500',
                                        iconClass: 'h-5 w-5',
                                },
                        ],
                },
        }), []);

        const [agentMode, setAgentMode] = useState<AgentMode>('healthcare');
        const modeConfig = MODE_MARKETING[agentMode];
        const placeholders = modeConfig.placeholders;
        const [currentPlaceholderPhraseIndex, setCurrentPlaceholderPhraseIndex] = useState(0);
        const [currentPlaceholderText, setCurrentPlaceholderText] = useState("");
        const [isPlaceholderTyping, setIsPlaceholderTyping] = useState(true);

	const handleCreateApp = (query: string, mode: AgentMode) => {
		const encodedQuery = encodeURIComponent(query);
		const encodedMode = encodeURIComponent(mode);
		const intendedUrl = `/chat/new?query=${encodedQuery}&agentMode=${encodedMode}`;

		if (
			!requireAuth({
				requireFullAuth: true,
				actionContext: 'to create applications',
				intendedUrl: intendedUrl,
			})
		) {
			return;
		}

		// User is already authenticated, navigate immediately
		navigate(intendedUrl);
	};

	// Auto-resize textarea based on content
	const adjustTextareaHeight = () => {
		if (textareaRef.current) {
			textareaRef.current.style.height = 'auto';
			const scrollHeight = textareaRef.current.scrollHeight;
			const maxHeight = 300; // Maximum height in pixels
			textareaRef.current.style.height =
				Math.min(scrollHeight, maxHeight) + 'px';
		}
	};

        useEffect(() => {
                adjustTextareaHeight();
        }, []);

        useEffect(() => {
                setCurrentPlaceholderPhraseIndex(0);
                setCurrentPlaceholderText('');
                setIsPlaceholderTyping(true);
        }, [agentMode]);

        // Typewriter effect
        useEffect(() => {
                if (placeholders.length === 0) {
                        return;
                }
                const currentPhrase = placeholders[currentPlaceholderPhraseIndex % placeholders.length];
		
		if (isPlaceholderTyping) {
			if (currentPlaceholderText.length < currentPhrase.length) {
				const timeout = setTimeout(() => {
					setCurrentPlaceholderText(currentPhrase.slice(0, currentPlaceholderText.length + 1));
				}, 100); // Typing speed
				return () => clearTimeout(timeout);
			} else {
				// Pause before erasing
				const timeout = setTimeout(() => {
					setIsPlaceholderTyping(false);
				}, 2000); // Pause duration
				return () => clearTimeout(timeout);
			}
		} else {
			if (currentPlaceholderText.length > 0) {
				const timeout = setTimeout(() => {
					setCurrentPlaceholderText(currentPlaceholderText.slice(0, -1));
				}, 50); // Erasing speed
				return () => clearTimeout(timeout);
			} else {
				// Move to next phrase
                                setCurrentPlaceholderPhraseIndex((prev) => (prev + 1) % placeholders.length);
                                setIsPlaceholderTyping(true);
                        }
                }
        }, [currentPlaceholderText, currentPlaceholderPhraseIndex, isPlaceholderTyping, placeholders]);
	return (
		<div className="flex flex-col items-center size-full">
			<div className="rounded-md mt-46 w-full max-w-2xl overflow-hidden">
				<div className="absolute inset-2 bottom-0 text-accent z-0 opacity-20">
					<svg width="100%" height="100%">
						<defs>
							<pattern
								id=":S2:"
								viewBox="-6 -6 12 12"
								patternUnits="userSpaceOnUse"
								width="12"
								height="12"
							>
								<circle
									cx="0"
									cy="0"
									r="1"
									fill="currentColor"
								></circle>
							</pattern>
						</defs>
						<rect
							width="100%"
							height="100%"
							fill="url(#:S2:)"
						></rect>
					</svg>
				</div>
				<div className="px-6 p-8 flex flex-col items-center z-10">
                                        <h1 className="text-shadow-sm text-shadow-red-200 dark:text-shadow-red-900 text-accent font-medium leading-[1.1] tracking-tight text-6xl w-full mb-4 bg-clip-text bg-gradient-to-r from-text-primary to-text-primary/90">
                                                {modeConfig.heroTitle}
                                        </h1>
                                        <p className="text-center text-text-primary/70 max-w-2xl mb-6">
                                                {modeConfig.heroSubtitle}
                                        </p>

					<form
						method="POST"
						onSubmit={(e) => {
							e.preventDefault();
							const query = textareaRef.current!.value;
							handleCreateApp(query, agentMode);
						}}
						className="flex z-10 flex-col w-full min-h-[150px] bg-bg-4 border border-accent/30 dark:border-accent/50 justify-between dark:bg-bg-2 rounded-[18px] shadow-textarea p-5 transition-all duration-200"
					>
						<textarea
							className="w-full resize-none ring-0 z-20 outline-0 placeholder:text-text-primary/60 text-text-primary"
							name="query"
							placeholder={`Create a ${currentPlaceholderText}`}
							ref={textareaRef}
							onChange={adjustTextareaHeight}
							onInput={adjustTextareaHeight}
							onKeyDown={(e) => {
								if (e.key === 'Enter' && !e.shiftKey) {
									e.preventDefault();
									const query = textareaRef.current!.value;
									handleCreateApp(query, agentMode);
								}
							}}
						/>
						<div className="flex items-center justify-between mt-4 pt-1">
							{import.meta.env.VITE_AGENT_MODE_ENABLED ? (
								<AgentModeToggle
									value={agentMode}
									onChange={setAgentMode}
									className="flex-1"
								/>
							) : (
								<div></div>
							)}

							<div className="flex items-center justify-end ml-4">
								<button
									type="submit"
									className="bg-accent text-white p-1 rounded-md *:size-5 transition-all duration-200 hover:shadow-md"
								>
									<ArrowRight />
								</button>
							</div>
						</div>
					</form>
				</div>
                        </div>
                        <div className="mt-12 grid w-full max-w-4xl gap-4 md:grid-cols-2">
                                {modeConfig.features.map((feature) => (
                                        <div key={feature.title} className="rounded-2xl border border-accent/20 bg-bg-4/60 p-6 backdrop-blur">
                                                <div className="mb-4 flex items-center gap-3">
                                                        <div className={`${feature.badgeClass} p-2`}>
                                                                <feature.icon className={feature.iconClass} />
                                                        </div>
                                                        <h2 className="text-lg font-semibold text-text-primary">
                                                                {feature.title}
                                                        </h2>
                                                </div>
                                                <p className="text-sm text-text-primary/70">
                                                        {feature.description}
                                                </p>
                                        </div>
                                ))}
                        </div>
                </div>
        );
}
