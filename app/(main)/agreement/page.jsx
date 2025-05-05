import { CloudUpload, ShieldCheck } from "lucide-react";

const page = () => {
  return (
    <section class="relative py-4 my-10">
    <div class="max-w-[1400px] w-full m-auto sm:px-3">
        <div class="flex flex-col md:flex-row gap-4">
            <div class="flex-1">
                <div class="bg-white rounded-2xl shadow-lg shadow-gray-100 overflow-hidden">
                    <div class="max-w-4xl mx-auto px-3 sm:py-20 py-10 bg-white rounded-xl shadow-sm">
                        {/* Header */}
                        <div class="text-center sm:mb-20 mb-8">
                            <h1 class="text-2xl font-bold text-gray-800 mb-2">Font Submission Agreement</h1>
                            <p class="text-sm text-gray-600">Last updated: <span id="current-date">July 10,
                                    2023</span></p>
                        </div>

                        <div class="grid grid-cols-1 gap-10">
                            {/* Guidelines Section */}
                            <div class="ml-3">
                                <h3 class="text-xl flex gap-2 font-medium text-gray-800 mb-2">
                                    <CloudUpload strokeWidth={1.5} />
                                    Upload Guidelines
                                </h3>
                                <div class="text-sm text-gray-600 space-y-2">
                                    <p>Please review these requirements before submitting your font</p>
                                    <ul class="list-disc pl-5 space-y-1">
                                        <li>
                                            <strong class="font-medium">
                                                Review Process:
                                            </strong> Publication is not
                                            automatic. Each font is carefully reviewed by our team before being
                                            published.
                                        </li>
                                        <li>
                                            <strong class="font-medium">
                                                Character Set:
                                            </strong> Fonts must include at
                                            minimum a complete A-Z and a-z character set (Latin alphabet).
                                        </li>
                                        <li>
                                            <strong class="font-medium">
                                                Permanence:
                                            </strong> Temporary fonts are not
                                            accepted. Submitted fonts should remain available indefinitely and
                                            not be
                                            removed after publication.
                                        </li>
                                        <li>
                                            <strong class="font-medium">
                                                Originality:
                                            </strong> You must be the original creator or have legal rights to
                                            distribute the font.
                                        </li>
                                        <li>
                                            <strong class="font-medium">
                                                File Format:
                                            </strong> Acceptable formats: .ttf, .otf, .woff, .woff2 (or .zip
                                            containing these formats). Maximum file size: 10MB per file (50MB for
                                            ZIP
                                            archives).
                                        </li>

                                    </ul>
                                    <p class="italic bg-sky-100 text-sky-700 p-6 rounded-xl mt-2">
                                        <strong>
                                            Note:
                                        </strong> Approval typically takes 3-5 business days. You'll
                                        receive an email notification once your font has been reviewed.
                                        Rejected submissions may be revised and resubmitted.
                                    </p>
                                </div>
                            </div>

                            {/* Agreement Section */}
                            <div class="ml-3">
                            <h3 class="text-xl flex gap-2 font-medium text-gray-800 mb-2">
                                    <CloudUpload strokeWidth={1.5} />
                                    Upload Agreement
                                </h3>
                                <div class="text-sm text-gray-600 space-y-2">
                                    <p>By submitting your font, you agree to the following terms</p>
                                    <ul class="list-disc pl-5 space-y-1">
                                        <li>
                                            <strong class="font-medium">
                                                Ownership & Rights:
                                            </strong>You certify that you are the original creator of the font, OR
                                            You have legal rights to distribute the font, AND You have obtained all
                                            necessary permissions for included elements
                                        </li>
                                        <li>
                                            <strong class="font-medium">
                                                License Grant:
                                            </strong> By submitting your font, you grant this platform:
                                            Non-exclusive rights to distribute your font.
                                            Permission to display and promote your font. Right to convert file
                                            formats for compatibility.
                                            (You retain all copyright and may distribute elsewhere)
                                        </li>
                                        <li>
                                            <strong class="font-medium">
                                                Distribution Terms:
                                            </strong> You agree that submitted fonts will remain available
                                            indefinitely. Fonts may be bundled in collections or promotions.
                                            Basic font information may be translated to other languages
                                        </li>
                                        <li>
                                            <strong class="font-medium">
                                                Removal Policy:
                                            </strong>Fonts may only be removed For verified legal/copyright issues.
                                            At platform's discretion for policy violations.
                                            With 30 days notice for non-renewed commercial licenses.
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Terms & Conditions Section */}
                            <div class="ml-3">
                                <h3 class="text-xl flex gap-2 font-medium text-gray-800 mb-2">
                                    <ShieldCheck strokeWidth={1.5} />
                                    Terms and Conditions
                                </h3>
                                <div class="text-sm text-gray-600 space-y-2">
                                    <ul class="list-disc pl-5 space-y-1">
                                        <li>
                                            <strong class="font-medium">
                                                General Terms:
                                            </strong> This platform reserves the right to reject any submission
                                            without explanation.
                                            Approval does not constitute endorsement of font quality. We may modify
                                            these terms with 30 days notice.
                                        </li>
                                        <li>
                                            <strong class="font-medium">
                                                User Responsibilities:
                                            </strong> You are responsible for maintaining backup copies of your
                                            files.
                                            You must provide accurate contact information. You must promptly report
                                            any errors or copyright issues.
                                        </li>
                                        <li>
                                            <strong class="font-medium">
                                                Privacy Policy:
                                            </strong> We collect only necessary submission information.
                                            Email addresses will only be used for submission-related communication.
                                            Download statistics may be shared with font creators.
                                        </li>
                                        <li>
                                            <strong class="font-medium">
                                                Liability:
                                            </strong> We are not responsible for misuse of downloaded fonts.
                                            We do not guarantee specific download numbers.
                                            Font creators are responsible for license enforcement.
                                        </li>
                                        <li>
                                            <strong class="font-medium">
                                                Dispute Resolution:
                                            </strong> Disputes will be resolved through mediation.
                                            Claims must be filed within 90 days of issue.
                                            This agreement is governed by your Country law.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>

</section>
  );
};

export default page;
