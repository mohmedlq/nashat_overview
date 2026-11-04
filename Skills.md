Create interfaces that look intentionally designed for the product and its users—not like a generic AI landing-page template. Visual quality must come from product understanding, clear hierarchy, typography, spacing, content, and deliberate interaction design rather than decorative effects.
“Distinctive” does not mean visually loud. A restrained, utilitarian interface can be excellent when that is the right fit for the product.
Use When
- Building a new page or frontend from a brief, screenshot, design reference, or existing repository.
- Redesigning an interface that feels generic, cluttered, repetitive, or obviously AI-generated.
- Choosing layout, visual hierarchy, typography, color, component patterns, motion, or responsive behavior.
- Implementing a UI in React, TypeScript, Vite, Tailwind CSS, or another existing frontend stack.
Don't Use When
- The task is strictly backend, data modeling, or API work with no UI changes.
- The user explicitly requests a faithful reproduction of an existing design. In that case, prioritize fidelity over inventing a new visual direction.
- The user supplies a design system or brand guide. Treat it as the source of truth; improve within its constraints rather than overriding it.
Workflow
1. Inspect before editing. Read the relevant files, package scripts, existing routes, shared components, design tokens, and installed dependencies. Identify the current stack and conventions. Reuse them unless there is a concrete reason not to. Do not replace project configuration or add a UI library merely for convenience.
2. Understand the product. Establish the primary user, the page's job, the main action, the content hierarchy, and the device context. If the brief is incomplete, make a small set of sensible assumptions and state them briefly; do not block routine work with unnecessary questions.
3. Choose a coherent design direction. Select a clear visual concept suited to the product: for example editorial, technical, warm and human, institutional, data-dense, playful, or commerce-focused. Define what makes the direction appropriate. Avoid combining unrelated styles just to make the screen feel “designed.”
4. Plan the composition. Decide the page structure and visual focal point before styling individual components. Make the primary action obvious, group related information, create meaningful whitespace, and vary section layouts only when it improves comprehension.
5. Set design foundations. Establish a small, consistent system for typography, color, spacing, radii, borders, shadows, widths, and responsive breakpoints. Use semantic tokens or CSS variables where appropriate. Use a restrained palette with purposeful contrast; do not select colors by habit or default to trendy gradients.
6. Build around real content. Use the actual product language, believable data, meaningful empty states, validation messages, loading states, errors, and success states where relevant. Avoid lorem ipsum, fake testimonials, invented metrics, and generic marketing claims unless the user explicitly asks for placeholders.
7. Implement with restraint. Create components around actual reuse and responsibility boundaries. Keep markup semantic, styles maintainable, state explicit, and responsive rules understandable. Avoid overengineering, giant monolithic components, unnecessary dependencies, excessive conditional class strings, and abstraction without a demonstrated need.
8. Make the interface responsive and accessible. Check narrow and wide layouts, long text, overflow, keyboard focus, labels, button semantics, touch targets, reduced-motion preferences, and readable contrast. Do not use color as the sole signal. Use ARIA only when native HTML semantics are insufficient.
9. Verify the result. Run the available lint, type-check, and build commands when practical. Inspect the rendered page at desktop and mobile sizes if browser or screenshot tools are available. Check console errors, broken routes, clipping, awkward wrapping, inconsistent spacing, and interactive states. Fix visible issues instead of stopping when the code merely compiles.
10. Report honestly. Summarize the important design and implementation decisions, name the checks actually run, and disclose anything not visually verified. Never claim browser testing or accessibility compliance without evidence.
Rules
Avoid Generic AI Clichés
- Do not automatically use a centered hero, oversized gradient headline, glowing blobs, glassmorphism, pill-shaped buttons everywhere, and a three-column card grid. Use any of these only when the product and design direction justify them.
- Do not build every content section as a rounded card. Use typography, dividers, alignment, whitespace, tables, lists, editorial columns, or plain surfaces when they communicate better.
- Avoid gratuitous gradients, neon accents, heavy shadows, blur, ornamental borders, floating blobs, animated backgrounds, and decorative icons without a clear role.
- Do not use emoji as a substitute for a considered icon system. If the repository already uses an icon library such as Lucide, follow its conventions and use icons only when they improve recognition or scanning.
- Avoid default-looking copy such as “Unlock the power of…”, “Seamless experience,” “Transform your workflow,” and vague headings that could belong to any product. Write specific copy tied to the user's actual task.
- Do not invent numbers, customer logos, testimonials, ratings, badges, scarcity indicators, or social proof.
- Avoid uniform, repetitive layouts. A page can have consistency without every section having the same composition.
- Do not add animation simply to make the result seem polished. Motion must clarify state or spatial relationships, remain brief, and respect prefers-reduced-motion.
Make Design Decisions Deliberately
- Every prominent visual element must serve hierarchy, meaning, orientation, feedback, or brand expression. Remove elements that serve none of these purposes.
- Use no more typefaces than the design needs. Establish a clear type scale and line-height; choose fonts appropriate to the content and language. For Arabic interfaces, verify Arabic shaping, punctuation, numeral style, and RTL layout rather than assuming that setting dir="rtl" solves everything.
- Do not mix arbitrary radii, shadows, spacing values, or button styles. Define a compact system and apply it consistently.
- Use whitespace to establish grouping and importance; do not fill empty space with decorative UI.
- Prefer a clear hierarchy with one primary action per major context. Secondary and destructive actions must look secondary and destructive, respectively.
- Design the full state model, not only the happy path: loading, empty, error, disabled, success, validation, and long-content states where applicable.
- Treat data-heavy pages as work tools: prioritize scanning, density, filtering, comparison, clear labels, and useful defaults over marketing aesthetics.
- Preserve the user's existing product behavior and architecture unless the task explicitly calls for changes. Do not silently remove functionality to achieve a cleaner screenshot.
Engineering Quality
- Follow the repository's installed versions and patterns. Do not assume a Tailwind version, install packages, or rewrite configuration without inspecting the project first.
- Prefer semantic HTML and native controls before custom widgets. Keep interactive controls operable by keyboard and give inputs visible labels.
- Keep CSS scoped and predictable. Avoid broad selectors that unexpectedly affect unrelated pages; reuse tokens rather than copying near-identical values.
- Avoid unnecessary abstractions and one-off components that provide no meaningful reuse. Conversely, extract genuinely repeated patterns when it improves consistency.
- Handle responsive layout deliberately with fluid sizing, appropriate max-widths, and breakpoints based on content rather than device labels alone.
- Preserve existing API contracts, route behavior, and data types. Do not fabricate backend capabilities to make a UI look complete.
- Do not change unrelated files or perform a full redesign when the requested scope is a small correction.
Quality Gate
Before finishing, answer these questions internally:
1. Could this interface belong to almost any unrelated product? If yes, make the content, hierarchy, or composition more product-specific.
2. Is any gradient, card, shadow, icon, badge, or animation present only because AI-generated designs often use it? Remove it unless justified.
3. Can a user identify the page's purpose and primary action within a few seconds?
4. Are spacing, typography, colors, and component states consistent without making the whole page monotonous?
5. Does the layout survive mobile widths, long labels, empty data, and errors?
6. Are interactive elements accessible and genuinely functional rather than decorative?
7. Did I inspect the actual rendered result when tools allowed it, and am I transparent about what I could not verify?
If any answer reveals a concrete issue, fix it before reporting completion.
Examples
Poor default
A generic SaaS hero with a purple-blue gradient, huge vague slogan, floating translucent cards, three identical feature cards, arbitrary icons, and a primary button that does not lead anywhere.
Better approach
For a school activity-report generator, lead with the actual task: choose the report type, enter the relevant details, generate a draft, review it, and export it. Use a layout that makes those steps obvious, Arabic typography that is easy to read, clear form labels, purposeful progress and error states, and restrained styling. Add decorative elements only if they support the product's identity or orientation.
Better dashboard approach
Use a clear page title, relevant summary measures with meaningful labels, a readable data table, useful filters, explicit empty/loading/error states, and a responsive overflow strategy. Do not turn every row and statistic into a giant card or invent metrics to fill space.
Edge Cases
- User supplies a reference image: Match its important hierarchy, proportions, and interaction patterns. Do not “improve” it by adding unrelated trendy effects.
- User requests a visually bold style: Be bold through a coherent concept, typography, composition, contrast, and deliberate color—not by stacking unrelated effects.
- Existing design system is inconsistent: Follow established tokens first; propose or make narrowly scoped corrections rather than replacing the system without permission.
- No browser or screenshot tool is available: Run code-level checks that are available and clearly say that visual verification was not performed.
- A design choice depends on missing content: Use clearly marked, minimal placeholders instead of fabricated factual claims; make the component resilient to realistic content lengths.
- Arabic or mixed RTL/LTR content: Check logical alignment, icon placement, directional arrows, punctuation, numbers, forms, and embedded URLs. Use dir and CSS logical properties such as margin-inline-start where appropriate.
References
- Agent Skills specification: https://agentskills.io/specification
- OpenAI Codex skills guide: https://developers.openai.com/codex/skills/
- MDN: Accessibility: https://developer.mozilla.org/en-US/docs/Web/Accessibility
- MDN: Responsive design: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design