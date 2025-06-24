import React from "react";
import Coming from "../components/Coming";

const Policy = () => {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold mb-8" style={{ color: "#513490" }}>
            Privacy Policy
          </h1>

          <p className="text-lg mb-6" style={{ color: "var(--color-gray-500)" }}>
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#513490" }}>
                1. Information We Collect
              </h2>
              <div style={{ color: "var(--color-gray-500)" }} className="space-y-4">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris.
                </p>
                <h3 className="text-xl font-medium" style={{ color: "#513490" }}>
                  Personal Information
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Lorem ipsum dolor sit amet consectetur</li>
                  <li>Adipiscing elit sed do eiusmod tempor</li>
                  <li>Incididunt ut labore et dolore magna</li>
                  <li>Aliqua ut enim ad minim veniam</li>
                </ul>
                <h3 className="text-xl font-medium" style={{ color: "#513490" }}>
                  Automatically Collected Information
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Quis nostrud exercitation ullamco laboris</li>
                  <li>Nisi ut aliquip ex ea commodo consequat</li>
                  <li>Duis aute irure dolor in reprehenderit</li>
                  <li>Voluptate velit esse cillum dolore</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#513490" }}>
                2. How We Use Your Information
              </h2>
              <div style={{ color: "var(--color-gray-500)" }} className="space-y-4">
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Doloremque laudantium totam rem aperiam</li>
                  <li>Eaque ipsa quae ab illo inventore</li>
                  <li>Veritatis et quasi architecto beatae</li>
                  <li>Vitae dicta sunt explicabo nemo enim</li>
                  <li>Ipsam voluptatem quia voluptas sit</li>
                  <li>Aspernatur aut odit aut fugit sed</li>
                  <li>Quia consequuntur magni dolores eos</li>
                  <li>Qui ratione voluptatem sequi nesciunt</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#513490" }}>
                3. Information Sharing and Disclosure
              </h2>
              <div style={{ color: "var(--color-gray-500)" }} className="space-y-4">
                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt.</p>
                <h3 className="text-xl font-medium" style={{ color: "#513490" }}>
                  We may share your information with:
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Ut labore et dolore magnam aliquam</li>
                  <li>Quaerat voluptatem ut enim ad minima</li>
                  <li>Veniam quis nostrum exercitationem</li>
                  <li>Ullam corporis suscipit laboriosam</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#513490" }}>
                4. Data Security
              </h2>
              <div style={{ color: "var(--color-gray-500)" }} className="space-y-4">
                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Et quas molestias excepturi sint</li>
                  <li>Occaecati cupiditate non provident</li>
                  <li>Similique sunt in culpa qui officia</li>
                  <li>Deserunt mollitia animi id est laborum</li>
                </ul>
                <p>Et dolorum fuga et harum quidem rerum facilis est et expedita distinctio nam libero tempore cum soluta nobis est eligendi optio.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#513490" }}>
                5. Cookies and Tracking Technologies
              </h2>
              <div style={{ color: "var(--color-gray-500)" }} className="space-y-4">
                <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint.</p>
                <h3 className="text-xl font-medium" style={{ color: "#513490" }}>
                  Types of cookies we use:
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Essential cookies:</strong> Molestiae non recusandae itaque earum
                  </li>
                  <li>
                    <strong>Analytics cookies:</strong> Rerum hic tenetur a sapiente delectus
                  </li>
                  <li>
                    <strong>Marketing cookies:</strong> Ut aut reiciendis voluptatibus maiores
                  </li>
                  <li>
                    <strong>Preference cookies:</strong> Alias consequatur aut perferendis
                  </li>
                </ul>
                <p>Doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#513490" }}>
                6. Your Rights and Choices
              </h2>
              <div style={{ color: "var(--color-gray-500)" }} className="space-y-4">
                <p>Explicabo nemo enim ipsam voluptatem quia voluptas sit aspernatur:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Access:</strong> Aut odit aut fugit sed quia
                  </li>
                  <li>
                    <strong>Correction:</strong> Consequuntur magni dolores eos
                  </li>
                  <li>
                    <strong>Deletion:</strong> Qui ratione voluptatem sequi
                  </li>
                  <li>
                    <strong>Portability:</strong> Nesciunt neque porro quisquam
                  </li>
                  <li>
                    <strong>Restriction:</strong> Est qui dolorem ipsum quia
                  </li>
                  <li>
                    <strong>Objection:</strong> Dolor sit amet consectetur
                  </li>
                  <li>
                    <strong>Withdraw consent:</strong> Adipisci velit sed quia non
                  </li>
                </ul>
                <p>Numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#513490" }}>
                7. Data Retention
              </h2>
              <div style={{ color: "var(--color-gray-500)" }} className="space-y-4">
                <p>Ut enim ad minima veniam quis nostrum exercitationem ullam corporis suscipit laboriosam nisi ut aliquip ex ea commodo consequat.</p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#513490" }}>
                8. Third-Party Services
              </h2>
              <div style={{ color: "var(--color-gray-500)" }} className="space-y-4">
                <p>Cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus error.</p>
                <p>Sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#513490" }}>
                9. Children's Privacy
              </h2>
              <div style={{ color: "var(--color-gray-500)" }} className="space-y-4">
                <p>Et quasi architecto beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit.</p>
                <p>Aut fugit sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt neque porro quisquam est.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#513490" }}>
                10. International Data Transfers
              </h2>
              <div style={{ color: "var(--color-gray-500)" }} className="space-y-4">
                <p>Qui dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt.</p>
                <p>Ut labore et dolore magnam aliquam quaerat voluptatem ut enim ad minima veniam quis nostrum exercitationem ullam.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#513490" }}>
                11. Changes to This Privacy Policy
              </h2>
              <div style={{ color: "var(--color-gray-500)" }} className="space-y-4">
                <p>Corporis suscipit laboriosam nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate.</p>
                <p>Velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#513490" }}>
                12. Contact Us
              </h2>
              <div style={{ color: "var(--color-gray-500)" }} className="space-y-4">
                <p>Qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus error sit voluptatem:</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>
                    <strong>Email:</strong>{" "}
                    <a href="mailto:lorem@ipsum.com" style={{ color: "#513490" }} className="hover:underline">
                      lorem@ipsum.com
                    </a>
                  </p>
                  <p>
                    <strong>Address:</strong> 123 Lorem Ipsum Street, Dolor City, ST 12345
                  </p>
                  <p>
                    <strong>Phone:</strong>{" "}
                    <a href="tel:+1234567890" style={{ color: "#513490" }} className="hover:underline">
                      +1 (234) 567-8900
                    </a>
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Policy;
