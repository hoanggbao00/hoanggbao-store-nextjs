import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function UserDetails({ id }: { id: string }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>User Information</CardTitle>
          <CardDescription>User #{id}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Role</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="USER">User</SelectItem>
                  <SelectItem value="ADMIN">Admin</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Full Name</Label>
              <p>-</p>
            </div>
            <div className="space-y-2">
              <Label>Phone Number</Label>
              <p>-</p>
            </div>
            <div className="space-y-2">
              <Label>Join Date</Label>
              <p>-</p>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Order History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="divide-y">
            {/* Order history will be listed here */}
            <p className="py-4 text-center text-muted-foreground">
              No orders found.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
