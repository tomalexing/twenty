import { Module } from '@nestjs/common';

import { DataSourceModule } from 'src/tenant/metadata/data-source/data-source.module';
import { TenantMigrationModule } from 'src/tenant/metadata/tenant-migration/tenant-migration.module';

import { MigrationGeneratorService } from './migration-generator.service';

@Module({
  imports: [DataSourceModule, TenantMigrationModule],
  exports: [MigrationGeneratorService],
  providers: [MigrationGeneratorService],
})
export class MigrationGeneratorModule {}
