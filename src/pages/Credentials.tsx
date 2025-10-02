import DashboardNav from "@/components/DashboardNav";
import { Button } from "@/components/ui/button";
import { CheckCircle, AlertCircle, Upload, FileText, Shield } from "lucide-react";

const Credentials = () => {
  const documents = [
    { id: 1, name: "RN License", status: "verified", expiry: "12/31/2025", uploaded: "01/15/2024" },
    { id: 2, name: "BLS Certification", status: "verified", expiry: "06/30/2025", uploaded: "01/15/2024" },
    { id: 3, name: "Background Check", status: "verified", expiry: "N/A", uploaded: "01/10/2024" },
    { id: 4, name: "TB Test", status: "expiring", expiry: "01/15/2025", uploaded: "01/15/2024" },
    { id: 5, name: "COVID-19 Vaccination", status: "verified", expiry: "N/A", uploaded: "03/20/2024" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <DashboardNav userType="worker" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Credentials & Documents</h1>
            <p className="text-muted-foreground">Keep your certifications up to date to remain eligible for shifts</p>
          </div>

          {/* Compliance Status */}
          <div className="card-elevated p-6 mb-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-success-light flex items-center justify-center">
                  <Shield className="w-6 h-6 text-success" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">Compliance Status: Active</h2>
                  <p className="text-sm text-muted-foreground">You're cleared to work on all shifts</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-success">100%</div>
                <p className="text-sm text-muted-foreground">Compliance Rate</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-success-light border border-success/20 text-center">
                <div className="text-2xl font-bold text-success mb-1">5</div>
                <p className="text-sm text-success">Verified Documents</p>
              </div>
              <div className="p-4 rounded-lg bg-urgent-light border border-urgent/20 text-center">
                <div className="text-2xl font-bold text-urgent mb-1">1</div>
                <p className="text-sm text-urgent">Expiring Soon</p>
              </div>
              <div className="p-4 rounded-lg bg-muted border border-border text-center">
                <div className="text-2xl font-bold text-foreground mb-1">0</div>
                <p className="text-sm text-muted-foreground">Pending Review</p>
              </div>
            </div>
          </div>

          {/* Upload New Document */}
          <div className="card-elevated p-6 mb-8">
            <h2 className="text-xl font-bold mb-4">Upload New Document</h2>
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
              <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="font-semibold mb-2">Click to upload or drag and drop</p>
              <p className="text-sm text-muted-foreground">PDF, JPG, PNG up to 10MB</p>
            </div>
          </div>

          {/* Documents List */}
          <div className="card-elevated p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">My Documents</h2>
              <Button variant="outline" size="sm">
                Download All
              </Button>
            </div>

            <div className="space-y-3">
              {documents.map((doc) => (
                <div
                  key={doc.id}
                  className="p-4 rounded-lg border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center shrink-0">
                        <FileText className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold">{doc.name}</h3>
                          {doc.status === "verified" ? (
                            <span className="badge-verified">
                              <CheckCircle className="w-3 h-3" />
                              Verified
                            </span>
                          ) : (
                            <span className="badge-urgent">
                              <AlertCircle className="w-3 h-3" />
                              Expiring Soon
                            </span>
                          )}
                        </div>
                        <div className="grid sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
                          <p>Expires: {doc.expiry}</p>
                          <p>Uploaded: {doc.uploaded}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                      <Button variant="outline" size="sm">
                        Replace
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Required Documents Checklist */}
          <div className="card-elevated p-6 mt-8">
            <h2 className="text-xl font-bold mb-4">Required Documents Checklist</h2>
            <div className="space-y-3">
              {[
                { name: "Valid RN/LVN/CNA License", required: true, completed: true },
                { name: "BLS/CPR Certification", required: true, completed: true },
                { name: "Background Check (within 1 year)", required: true, completed: true },
                { name: "TB Test or Chest X-Ray", required: true, completed: true },
                { name: "COVID-19 Vaccination Card", required: true, completed: true },
                { name: "ACLS Certification", required: false, completed: false },
                { name: "PALS Certification", required: false, completed: false },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-accent/50">
                  <div className="flex items-center gap-3">
                    {item.completed ? (
                      <CheckCircle className="w-5 h-5 text-success" />
                    ) : (
                      <div className="w-5 h-5 rounded-full border-2 border-muted-foreground" />
                    )}
                    <div>
                      <p className="font-medium">{item.name}</p>
                      {!item.required && (
                        <p className="text-xs text-muted-foreground">Optional - Increases job opportunities</p>
                      )}
                    </div>
                  </div>
                  {!item.completed && (
                    <Button variant="outline" size="sm">
                      Upload
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Credentials;
