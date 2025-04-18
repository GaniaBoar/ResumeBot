import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Modal } from "@/components/ui/modal"; 

export function FormField({ label, name, onChange }) {
    return (
        <div>
            <Label className="block mb-1">{label}</Label>
            <Input name={name} placeholder={label} onChange={onChange} className="w-full p-3 border rounded text-black" required />
        </div>
    );
}

export function PreviewModal({ formData, onClose }) {
    return (
        <Modal onClose={onClose}>
            <Card className="p-4">
                <h3 className="text-xl font-bold mb-2">Resume Preview</h3>
                <CardContent>
                    {Object.entries(formData).map(([key, value]) => (
                        <p key={key}><strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}</p>
                    ))}
                </CardContent>
                <Button onClick={onClose} className="mt-4 bg-red-500 text-white p-2 rounded">Close</Button>
            </Card>
        </Modal>
    );
}
