import AttitudeChart from '@/app/ui/dashboard/attitude-chart';
import AttitudeFrequency from '@/app/ui/dashboard/attitude-frequency';

export default function DashboardPage() {
  return (
    <div className="w-full h-full">
      <AttitudeChart />
      <AttitudeFrequency />
    </div>
  );
}